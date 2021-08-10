# How to start the local net

> This article takes the establishment of a 2k network as an example to deploy a venus cluster on a CentOS 7.* system.

## Service layer

&ensp;&ensp; Please refer to the document for component download and compilation：https://venus.filecoin.io/guide/How-To-Deploy-MingPool.html#pre-requisites

### venus-auth
```bash
$ nohup ./venus-auth run > auth.log 2>&1 &

# token list
$ ./venus-auth token list
 
# user list
$ ./venus-auth user list
```

### venus-gateway

```bash
$ nohup ./venus-gateway --listen=/ip4/0.0.0.0/tcp/45132 run --auth-url=http://127.0.0.1:8989 > gateway.log 2>&1 &

# wallet
$ ./venus-gateway  wallet list
 
# miner
$ ./venus-gateway  miner list
```

### venus

- Generate pre-sealed files and data
```bash
$ ./venus seed pre-seal --sector-size 2048 --num-sectors 2
$ ./venus seed genesis new localnet.json
$ ./venus seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json
```
> `seed pre-seal` need root privileges, please execute under root user.

- Run venus 
```sh
$ nohup ./venus daemon --make-genesis=devgen.car --genesis-template=localnet.json --network=2k --auth-url=http://127.0.0.1:8989 > venus.log 2>&1 &
```
> As a public service component, venus needs to modify the configuration file when it needs to monitor different IPs. `.venus/config.json`
```bash
"apiAddress": "/ip4/0.0.0.0/tcp/3453",
```

### venus-message

&ensp;&ensp; venus-auth Manage the jwt tokens used by other venus modules so that they can communicate with each other securely on the network. Generate tokens for shared modules.

```bash
# --perm specifies admin, sign, wirte or read permission of the token generated
$ ./venus-auth token gen --perm admin <SHARED>
<SHARED_ADMIN_AUTH_TOKEN>
```
> SHARED is the name of the token, and the shared component can be started at will.

- Generate tokens for miners t01000 and venus-wallet
```bash
$ ./venus-auth user add --name=test --miner=t01000
$ ./venus-auth token gen --perm write test
<USER_WRITE_AUTH_TOKEN>
```
> test is the cluster alias

query token or user
```bash
$ ./venus-auth user list
number: 1
name: test
miner: f01000
sourceType: 0   // miner:1
state 0         // 0: disable, 1: enable
comment: 
createTime: Thu, 05 Aug 2021 09:36:00 CST
updateTime: Thu, 05 Aug 2021 09:36:00 CST

$ ./venus-auth token list
num     name            perm            createTime              token
1       share-test      admin   2021-08-05 09:27:56     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmUtdGVzdCIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.q3Euz4CwlqlLCTUciT4gkee6au_zhhyUAkyTXlkG51E
2       test            write   2021-08-05 09:36:44     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInBlcm0iOiJ3cml0ZSIsImV4dCI6IiJ9.X8L5SWVzoRpr5X5hEOAh17n22zOgfkla7POva0zCihY
```

```bash
nohup ./venus-messager run \
--auth-url=http://127.0.0.1:8989 \
--node-url=/ip4/127.0.0.1/tcp/3453 \
--gateway-url=/ip4/127.0.0.1/tcp/45132 \
--auth-token=<SHARED_ADMIN_AUTH_TOKEN> \
--db-type=sqlite \
> msg.log 2>&1 &
```
> db-type also supports mysql, the configuration is as follows：
```bash
--db-type=mysql --mysql-dsn "<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_messager?parseTime=true&loc=Local&readTimeout=10s&writeTimeout=10s"
```

### venus-miner
```bash
# init miner repo
./venus-miner init --nettype=2k --auth-api=http://127.0.0.1:8989 \
 --gateway-api=/ip4/127.0.0.1/tcp/45132
 --api=/ip4/127.0.0.1/tcp/3453 --token=<SHARED_ADMIN_AUTH_TOKEN>
 
# run 
nohup ./venus-miner run --nettype=2k --nosync > miner.log 2>& 1 &

$ ./venus-miner address state
[
        {
                "Addr": "f01000",
                "IsMining": true,
                "Err": [
                        "2021-08-05 09:45:06 failed to compute proof: no connections for this miner t01000"
                ]
        }
]
```
> Because we have not started venus-sealer at this time, we ignore this error. Here we stop the block production first, and wait for sealer to start successfully before starting.
```bash
$ ./venus-miner address stop f01000
stop mining success.
```

## Genesis node

### venus-wallet

```sh
$ nohup ./venus-wallet run > wallet.log 2>&1 &

# set password
$ ./venus-wallet setpwd
Password:******
Enter Password again:******

# import wallet
$ ./venus-wallet import ~/.genesis-sectors/pre-seal-t01000.key

# 查询
$ ./venus-wallet list
t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia
```

Set up access to venus-gateway, provide signature service
```bash
# 修改`~/.venus_wallet/config.toml`
[APIRegisterHub]
RegisterAPI = ["/ip4/127.0.0.1/tcp/45132"]
Token = "<USER_WRITE_AUTH_TOKEN>"
# Cluster alias
SupportAccounts = ["test"]
```
***Restart venus-wallet after saving, you need to unlock***
```bash
$ ./venus-wallet unlock
```

Check whether it is successful, query in the log of venus-gateway:
```bash
2021-08-05T10:01:07.665+0800    INFO    event_stream    walletevent/wallet_conn_mgr.go:89       add wallet connection   {"channel": "58309445-87da-4160-831a-44e5236ab3c7", "walletName": "test", "addrs": ["t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"], "support": {"test":{}}, "signBytes": "6VzoKBejPzmFp/DvJzSO16s5SziYZKYjU2l2EkDUKy0="}
2021-08-05T10:01:07.666+0800    INFO    event_stream    walletevent/wallet_event.go:79  add new connections test 58309445-87da-4160-831a-44e5236ab3c7
```
Or use the command query
```bash
$ ./venus-gateway wallet list
[
        {
                "Account": "test",
                "SupportAccounts": [
                        "test"
                ],
                "ConnectStates": [
                        {
                                "Addrs": [
                                        "t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"
                                ],
                                "ChannelId": "58309445-87da-4160-831a-44e5236ab3c7",
                                "Ip": "127.0.0.1:45138",
                                "RequestCount": 0,
                                "CreateTime": "2021-08-05T10:01:06.261321253+08:00"
                        }
                ]
        }
 ]
```
> The above log indicates that the wallet registration service component is successful and can provide signature services.


### venus-sealer

- init genesis-miner t01000
```bash
$ ./venus-sealer init --genesis-miner --actor=t01000 --sector-size=2048 --pre-sealed-sectors=~/.genesis-sectors --pre-sealed-metadata=~/.genesis-sectors/pre-seal-t01000.json --nosync --network=2k \
--node-url=/ip4/127.0.0.1/tcp/3453 \
--messager-url=/ip4/127.0.0.1/tcp/39812 \
--gateway-url=/ip4/127.0.0.1/tcp/45132 \
--auth-token=<USER_WRITE_AUTH_TOKEN>
--no-local-storage
```
   
- start
```bash
$ nohup ./venus-sealer run --nosync --network=2k > sealer.log 2>&1 &

$ ./venus-sealer info
Chain: [sync behind! (15h45m53s behind)] [basefee 100 pFIL]
Sealer: t01000 (2 KiB sectors)
Power: 40 Ki / 40 Ki (100.0000%)
        Raw: 4 KiB / 4 KiB (100.0000%)
        Committed: 4 KiB
        Proving: 4 KiB
Projected average block win rate: 20024.16/week (every 30s)
Projected block win with 99.9% probability every 41s
(projections DO NOT account for future network and miner growth)

Sealer Balance:    3.242 μFIL
      PreCommit:  0
      Pledge:     1.192 μFIL
      Vesting:    0
      Available:  2.05 μFIL
Market Balance:   0
       Locked:    0
       Available: 0
Worker Balance:   50000000 FIL
Total Spendable:  50000000 FIL

Sectors:
        Total: 2
        Proving: 2
```

Check whether the registration of the service component is successful
```bash
2021-08-05T10:44:01.748+0800    INFO    proof_stream    proofevent/proof_event.go:71    add new connections 278c6798-b6ed-4062-8bde-06b8406ce06a for miner t01000
```
or
```
$ ./venus-gateway miner list
t01000
```

- start winningPoSt
```bash
$ ./venus-miner address start t01000
start mining success.
```

View venus-miner log
```
2021-08-05T12:04:28.562+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 3.202841ms
2021-08-05T12:04:28.562+0800    INFO    miner   miner/warmup.go:94      winning PoSt warmup successful  {"took": 0.00494326}
2021-08-05T12:04:28.695+0800    INFO    miner   miner/multiminer.go:592 attempting to mine a block      {"tipset": ["bafy2bzacebmqknjl3nzdqsfalfe57u6nzzg5c5uphf3ctm4p2gvdgg33lhels"], "miner": "t01000"}
2021-08-05T12:04:28.699+0800    INFO    miner   miner/multiminer.go:628 Time delta between now and our mining base: 61560s (nulls: 0), miner: t01000
2021-08-05T12:04:28.705+0800    INFO    miner   miner/minerwpp.go:72    Computing WinningPoSt ;[{SealProof:5 SectorNumber:0 SealedCID:bagboea4b5abcbicxvd7mvaigrtsinxy33tjgg6yu24brzazyfwrtoe4ca7efhkav}]; [46 110 203 67 43 156 84 228 212 143 45 167 11 151 84 34 99 202 39 85 145 136 126 180 78 134 159 125 210 112 219 223]
2021-08-05T12:04:28.707+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 1.802124ms
2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:704 mined new block ( -> Proof)     {"took": 0.012012063, "miner": "t01000"}
2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:385 mining compute end      {"number of wins": 1, "total miner": 1}
2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:394 select message  {"tickets": 1}
2021-08-05T12:04:28.715+0800    INFO    miner   miner/multiminer.go:420 mined new block {"cid": "bafy2bzacedyy2xr3bvsyfd42qzpeiprojza2yyt7wdggeawj2cmtisfjnn4lo", "height": "1", "miner": "t01000", "parents": ["t00"], "took": 0.020098632}
```
So far, the construction of public components and genesis node has been completed.
```
$ ./venus chain ls
2: (2021-08-05 14:09:55) [ bafy2bzacect5pja2prfkugczbdv2jfpbou4qr3edxxr6g7oo5bny6qklzgama: t01000, ]
3: (2021-08-05 14:09:59) [ bafy2bzacedsl7eyaaiu7oifsdy6zpj2zotbcsnuml45hu5n4erdhygiyeua6s: t01000, ]
4: (2021-08-05 14:10:03) [ bafy2bzacea42xioz3ki33uw7bbjkc5ydt4qs2j55ku2aqy2box4wjcgmzxtny: t01000, ]
5: (2021-08-05 14:10:07) [ bafy2bzacecbmetsiwgms7sbukkkgzstpie5wsdwqsw5hwjqt6eqkuaq23wugs: t01000, ]
6: (2021-08-05 14:10:11) [ bafy2bzacea3ojun5fx2rpplsnevvedhgxgpvwy7afmubcvhf463hdhlfpw4ye: t01000, ]
7: (2021-08-05 14:10:15) [ bafy2bzaced4jqw2p5cejdtlfi7cq4o2treiynkp2lnhfpyss352qlbcdtknti: t01000, ]
8: (2021-08-05 14:10:19) [ bafy2bzacecpmmlobk6qrzoclzu2duy6t4irvnqryyq4libvrlh4ekz3lmihhm: t01000, ]
9: (2021-08-05 14:10:23) [ bafy2bzaceadvy5inclxdbtd2hsd72mijarkzz3rwpzznisf2yhlghushlooeg: t01000, ]
10: (2021-08-05 14:10:27) [ bafy2bzacea3rn3zuiqgp5kxbam3fc3dqnoccktpsfwaukko3amxerpjud2zns: t01000, ]
11: (2021-08-05 14:10:31) [ bafy2bzaceay2tzyd45k3e7tisbbp47gkjsrqs23jgl64wkj6jqryk4grrr7ss: t01000, ]
```

## Normal node

&ensp;&ensp; Please refer to the doc: https://venus.filecoin.io/guide/Using-venus-Shared-Modules.html#pre-requisites

&ensp;&ensp; The only thing that needs to be explained is the problem of transferring Fil to ordinary node wallets: because the venus service component restricts Send messages, and the original fil of the 2k private network is in the genesis-wallet, a sync node is required.

- run a normal venus node
```sh
 nohup ./venus daemon --genesisfile=devgen.car --network=2k > venus.log 2>&1 &
```

- Import Genesis Wallet
```
$ ./venus-wallet export t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia
Password:*
7b2254797065223a22626c73222c22507269766174654b6579223a224541326e6a463363326b4f467977323079564f574b66733371794d6451767a35334c667459497347456b673d227d

$ ./venus wallet set-password
Password:*
Enter Password again:*
Password set successfully 
You must REMEMBER your password! Without the password, it's impossible to decrypt the key!

$ ./venus wallet import
ipfs: Reading from /dev/stdin; send Ctrl-d to stop.

```

- Send
```sh
 ./venus send <to> 100
```
-- Common commands
```
$ ./venus wallet list

$ ./venus wallet balance <wallet>

$ ./venus wallet default
$ ./venus wallet set-default <wallet>
```
> The venus transfer node also needs to be unlocked after restarting, otherwise the transfer cannot be made.