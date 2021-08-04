(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{452:function(e,t,a){"use strict";a.r(t);var r=a(17),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("p",[e._v(e._s(e.$frontmatter.description))]),e._v(" "),a("p",[e._v("There are two main types of rewards for their efforts: storage fees and block rewards.")]),e._v(" "),a("h2",{attrs:{id:"storage-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-fees"}},[e._v("#")]),e._v(" Storage fees")]),e._v(" "),a("p",[a("em",[e._v("PoSt (Proof-of-Spacetime)")]),e._v(" window checks are performed on 24 hour intervals across the network to ensure that miners are continuing to host their required sectors as normal. Correspondingly, each storage miner’s set of pledged sectors is partitioned into subsets, one subset for each window. Within a given window, each storage miner must submit a PoSt for each sector in their respective subset. For each day a miner is inactive it will receive a "),a("RouterLink",{attrs:{to:"/zh/mine/slashing.html"}},[e._v("fault fee")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Storage fees")]),e._v(" are the fees paid regularly by clients after a deal has been reached, in exchange for storing data. These fees are automatically deposited into a miner's associated withdrawal wallet as they continue to perform their duties over time, and are briefly locked upon being received.")]),e._v(" "),a("h2",{attrs:{id:"block-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-rewards"}},[e._v("#")]),e._v(" Block rewards")]),e._v(" "),a("p",[a("strong",[e._v("Block rewards")]),e._v(' are large sums that are given to the miner credited for a new block. Unlike storage fees, these rewards do not come from an associated client; rather, the network "prints" new FIL as both an inflationary measure and an incentive to miners advancing the chain. All active miners on the network have a chance at receiving a block reward, their chance at such being directly proportional to the amount of storage space currently being contributed to the network.')]),e._v(" "),a("p",[e._v("The mechanism to earn the right to mine a new block is called "),a("em",[e._v("WinningPoSt")]),e._v(". In the Filecoin network, time is discretized into a series of epochs – the blockchain's height corresponds to the number of elapsed epochs. At the beginning of each epoch, a small number of storage miners are elected to mine new blocks. Additionally to the block reward, each miner can collect the fees associated to each message included in the block.")]),e._v(" "),a("p",[e._v('The number of blocks on every tipset is based on based on a Poisson distribution of a random variable with λ = 5. Miner implementations may use several strategies to choose which messages to include in every block to minimize overlap. Only the "first execution" of each message will collect the associated fees, with executions ordered per the hash of the VRF (Verifiable Random Function) ticket associated to the block.')]),e._v(" "),a("h2",{attrs:{id:"verified-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verified-clients"}},[e._v("#")]),e._v(" Verified clients")]),e._v(" "),a("p",[e._v('To further incentivize the storage of "useful" data over simple capacity commitments, storage miners have the additional opportunity to compete for special deals offered by '),a("em",[e._v("verified clients")]),e._v(". Such clients are certified with respect to their intent to offer deals involving the storage of meaningful data, and the power a storage miner earns for these deals is augmented by a multiplier. The total amount of power a given storage miner has, after accounting for this multiplier, is known as "),a("strong",[e._v("quality-adjusted power")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"retrieval-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-fees"}},[e._v("#")]),e._v(" Retrieval fees")]),e._v(" "),a("p",[e._v("Retrieval fees are paid incrementally using "),a("em",[e._v("payment channels")]),e._v(" as the retrieval deals are fulfilled (by sending portions of the data to the cl. This happens off-chain.")])])}),[],!1,null,null,null);t.default=i.exports}}]);