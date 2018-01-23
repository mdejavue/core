describe('Crypto', () => {

    /*
     * These vectors were generated by our reference implementation at:
     * https://github.com/dedis/kyber
     */
    const partialSignatureTestVectors = [
        {
            privKeys: [BufferUtils.fromHex("f80793b4cb1e165d1a65b5cbc9e7b2efa583de01bc13dd23f7a1d78af4349904"), BufferUtils.fromHex("407fd16dd5e908ea81f755a1fb2591dc7b19c2efcfeb517273aa7c520a5d8c06")],
            pubKeys: [BufferUtils.fromHex("8695ae0fc477e9c07138caa67d44b45b8d05bee777fd2a3d7c15cec726e4f010"), BufferUtils.fromHex("b14f7b1aea1125029453bc16e31488fec5ec5be75b371003610a6901f4035992")],
            pubKeysHash: BufferUtils.fromHex("2f2e0d26bdb53fb8a4735a77251453eb06d6e9db6d67955adc8706336520fec40efdb7c43f396009a3560c04fdea75d810c55f11e8dbea562e0875438957e664"),
            delinearizedPrivKeys: [BufferUtils.fromHex("5531dc8d35f336bf3b5aadb03bf2369bb1cb0bdcd588ac6a5d1179370bfdf00a"), BufferUtils.fromHex("f4dd2f8c63d156f471e84af2a1964b03a0b58dafed33c02cc1a44b1b48eb820f")],
            delinearizedPubKeys: [BufferUtils.fromHex("05750e281698ec0b6d2fb5252b7e474d647a5f4babc8d0befdcd04d5473a1579"), BufferUtils.fromHex("ef512dc2ea4583518ae1c9588d4d3655770f430f824fc36b21053abe7c7cb032")],
            secrets: [BufferUtils.fromHex("8406d5a4872a124c834e1876ef518203ba343a318557d051d4d5035a82c20501"), BufferUtils.fromHex("33b2d49f68c1091470bf7723253af5a0e755a035f918708203804485b24b9e0d")],
            commitments: [BufferUtils.fromHex("f3664d2921f41ea96ba8d2ea96f19a5844652bb746e65b2280da39f8a8a4a5fb"), BufferUtils.fromHex("5f5a38feced274ff07a094c271f45cc1eed70abdcc594fcb07999aeaf6c80307")],
            aggCommitment: BufferUtils.fromHex("5f6591c8d8a304fbdbb259826f8d88210c3aefce858f2432e91ba7224316861b"),
            aggPubKey: BufferUtils.fromHex("5bf678b9604126cca1148cd3239178e989a91ac5a3fa78c64482c335360bb00b"),
            partialSignatures: [BufferUtils.fromHex("65d2bb099b979b818fbd26428aa5dd54f8e3f1b71c2d3a3934b4338a9fe53708"), BufferUtils.fromHex("01eafa18d112094ff0888b3429b8bf52732adec4a52c327d26d5126a4b36d904")],
            aggSignature: BufferUtils.fromHex("66bcb6226caaa4d07f46b276b35d9da76b0ed07cc2596cb65a8946f4ea1b110d"),
            signature: BufferUtils.fromHex("5f6591c8d8a304fbdbb259826f8d88210c3aefce858f2432e91ba7224316861b66bcb6226caaa4d07f46b276b35d9da76b0ed07cc2596cb65a8946f4ea1b110d"),
            message: BufferUtils.fromAscii("")
        },
        {
            privKeys: [BufferUtils.fromHex("af6cccd64c2679d6bdfac26f32ab8c2ad1b875ec3e1ab7933509218bcea69c0a"), BufferUtils.fromHex("459124f418cc9ac5e027886e0bf6591493263b984f3d5d7fdf17867d327b1a0e")],
            pubKeys: [BufferUtils.fromHex("73903ee860501452abc3dbf31ad484033f11e4ca99ecd99d42fc8eb2b0816b51"), BufferUtils.fromHex("198579bc339d5209fbc4bed6f8dcb6234d30d98b678fc5e0e44c9dfa58ddf73f")],
            pubKeysHash: BufferUtils.fromHex("cc99ea463a1b146dcd0b83b95a15d6bfbe10907aaed1850cb5d85187e21ab37242d382f3f431bcdc33a5eb609ff5173a609b446b717e2c08e240e3be293da87a"),
            delinearizedPrivKeys: [BufferUtils.fromHex("a577441997f693a0c8463d0abe723d9974ae188c1a98cf33d72152864c5ca20c"), BufferUtils.fromHex("a7a3a56cc6b7e8f502d7317f3f79a41bb6fd06ab0793be5c539f5e44d5306706")],
            delinearizedPubKeys: [BufferUtils.fromHex("39e5bb4ddaca066b4ce13cdfca93d3b46ccd9341e55e1f8b081a401dbd83dbd8"), BufferUtils.fromHex("314e065b8a2d7399d02a9bfedfc2a9514d87e3aadd08f3d35315662d803d510b")],
            secrets: [BufferUtils.fromHex("a5ee1a93ce5bea1d20db30f12ec53ad4d3d87605dccb2abceb2dacaf54e8410d"), BufferUtils.fromHex("d4ac2ee84cf32bdad5a96c20590ad56fb4779e375fcd264ce8e9008be79b0b0d")],
            commitments: [BufferUtils.fromHex("e4c4e8877d96548c49f8d395e4f990eff38108b03281eca62a3430d3500db7c4"), BufferUtils.fromHex("6c3d1be926e02a958717d6bc4934d541582cf1ab8fba19bce0d3c5226ebb69ac")],
            aggCommitment: BufferUtils.fromHex("bd7b7414e03273d3e23049586b0a97ed8164651937b17c2e52e2261a89fb4347"),
            aggPubKey: BufferUtils.fromHex("08a2a7e9ed90811e8cabb48ffa2ff1a3b6e4f99bf81a552536cebbfed0a1ef8c"),
            partialSignatures: [BufferUtils.fromHex("0fa57e95bbf4b5530d13a7e4dc405401c478b0e62a1a26319da966d13edaf105"), BufferUtils.fromHex("2d28a1db8447ee6fcb915a4d5a373b0dcdcedf1fab563a63c15c0ccee49e8505")],
            aggSignature: BufferUtils.fromHex("3ccd1f71403ca4c3d8a4013237788f0e91479006d67060945e06739f2379770b"),
            signature: BufferUtils.fromHex("bd7b7414e03273d3e23049586b0a97ed8164651937b17c2e52e2261a89fb43473ccd1f71403ca4c3d8a4013237788f0e91479006d67060945e06739f2379770b"),
            message: BufferUtils.fromAscii("Hello World")
        },
        {
            privKeys: [BufferUtils.fromHex("fce1ccbeefe33e3d25dc198f69a58a2c40f24a75d0ea728cef65ad7e309ac20e"), BufferUtils.fromHex("312a4339dfd85e9650e918b3a714196cd2e54b4c84ac6f7abc1db897c2f4aa0c"), BufferUtils.fromHex("726254985d2fd37ac244365465bb52049e60396051daeaff5be858ef2bff2105"), BufferUtils.fromHex("0c817fcffd7c0e90d1957257b10b617e448454a029cdf25bcb8e2fa312c7860d")],
            pubKeys: [BufferUtils.fromHex("8e16f94ea50415097751606c7fd21e0bb51e340c3ba59f1a51dd430b8a8ef444"), BufferUtils.fromHex("94b8d238bbe70758ec7807d420dcbc0134b65fa9be03ca06592f957118f88010"), BufferUtils.fromHex("d365f216daf3f331ed2a803ec76968e0373f81695c4e8a70776a8f3eeba55a20"), BufferUtils.fromHex("f8bf28fe5d42a9a9dd0fa7a5826cd83a59c12181c366cba5eeefbc0c5b4fdac7")],
            pubKeysHash: BufferUtils.fromHex("158910d4ed875025dd26f906dfde891e9a47c9586af60b5deca6ae3be94be6528fae9cab4f083e85dd75aa9dd25d8df6f353d325861163465badfa22683fdc27"),
            delinearizedPrivKeys: [BufferUtils.fromHex("53c4fabe7f845a78d56ae8d482d32cae5e35c588824744b9ae095b0a4e6eac09"), BufferUtils.fromHex("821c6db9a9f12f6180d2d45ab421759f0531e1345bba3b0ca686c9e301069c08"), BufferUtils.fromHex("a22bb26d3d0494198676230260dd3dc5cdb5457fca6eab5c38bf3d47fff1ab08"), BufferUtils.fromHex("a83d01c79751c0bb29387c6d5981c7c3eb1861689d317011c839ec04d888cb0b")],
            delinearizedPubKeys: [BufferUtils.fromHex("33dc44d3384019a18a4acb951faf37d64870ee890663e0018e71845946626e8c"), BufferUtils.fromHex("78b47f19c8b94f5c32fb461bd91c8dcd7025de844fdb777051d0b24de75d51f9"), BufferUtils.fromHex("8e5e398f9ab1a96cd27422967d5930a0dd372ddcc3e5c19b2035ca122c59a21e"), BufferUtils.fromHex("16e8edc1847db6f52a21c7663ed85b11537c4410b8e5f0ff59ca0188dd7eb633")],
            secrets: [BufferUtils.fromHex("d671a40fabf8735899862b00395c864ac32abee0aa899ced4d9a22b827311802"), BufferUtils.fromHex("d8d568e93fa27da70dae66dde3d7f1b12f2a823e7fa7dffdf0ba3ee65fbd690c"), BufferUtils.fromHex("0886a14851375489b3dd95a0d03d4d6c7783759fab0a74d71b2028e99db5230c"), BufferUtils.fromHex("2413f3d8415c9afdd1b634ce86b2a6dcaad5cbf2fcb33718d020cf1813ec4705")],
            commitments: [BufferUtils.fromHex("877c7007fc838154cbacef7d4752d55c44400f0359399b3f59be19422b3eb912"), BufferUtils.fromHex("7d1dcbeae1bd00b0ded04ccf76909523535ae2df625711d2461713fe4c113789"), BufferUtils.fromHex("4e61ad68f9c163b89dfad6a17f528d5948fb2da1400386d21bab756e630d2fcf"), BufferUtils.fromHex("773fafeec83cc008fbf63961d98b56612811bb8037b9f3b192738db3fa6e1d29")],
            aggCommitment: BufferUtils.fromHex("b57b3ee1fa93230e68def1f56ab9c8e390527618b6f190b592ca40f84a877ad9"),
            aggPubKey: BufferUtils.fromHex("387d7d274e8c48379afc8ccc91e309bbdd6c259588e3f3999efcc3f137f92e76"),
            partialSignatures: [BufferUtils.fromHex("e4b7de85519f7724fd7d00b70edfe3505a71fe720dc9d34618dd77ab3c96e50f"), BufferUtils.fromHex("aa316a69be1fd834fbaa8d76170cb4031adc34ed27ab1640cd44c51aeda55806"), BufferUtils.fromHex("51c3c81056912c1445e9b977935233d55aef075187088107c2ce9f33fc00dc07"), BufferUtils.fromHex("90d28225e5d752b5e02f60d7ac461ee1d4ee1c713ffc3d1c43657cb5c1031008")],
            aggSignature: BufferUtils.fromHex("95d7a86b1662aa727108b936a9902be1a32b5822fc78a9aaea5559afe7402a06"),
            signature: BufferUtils.fromHex("b57b3ee1fa93230e68def1f56ab9c8e390527618b6f190b592ca40f84a877ad995d7a86b1662aa727108b936a9902be1a32b5822fc78a9aaea5559afe7402a06"),
            message: BufferUtils.fromAscii("")
        },
        {
            privKeys: [BufferUtils.fromHex("65edb8c173fdbaf5e106ca53069cde47c2a7627518228d8269a3da35f5fd0001"), BufferUtils.fromHex("574e47b97d5918ee12f3872c7843b789c34298ff7cc59ea049586afe63f7c20a"), BufferUtils.fromHex("a8177dccd4557044db70f3066960a1df283ba5f0b8ffa997c6411c9119ac160d"), BufferUtils.fromHex("21ea275ae38602ef65aac6774db8ed2e6164923b14a7e11c40df874f453b780a")],
            pubKeys: [BufferUtils.fromHex("3d3f83dc9bacfc90f64b520099e97a81e90ab58a1e10b5c95631c07839c027d7"), BufferUtils.fromHex("c5539285ec6a3cca991eb8ce3d0f56311aefa706645db278b6a243fac3ba36ff"), BufferUtils.fromHex("d60bcfbce4d869b7de3a6efa2ce12565e77233eb091a34bcee81e6981ddf897b"), BufferUtils.fromHex("43b51bc6464d60d95ea36f173f62e23f5405160790aa925694ccfba01d834f18")],
            pubKeysHash: BufferUtils.fromHex("2ce18109c27ef0f1112b59e1decbd25b3cfc0347112bc75b053637e11021da8d5e0512e82b64ccd8054da021973f45277e275a0fa6bd89f9bbef8015462c3471"),
            delinearizedPrivKeys: [BufferUtils.fromHex("f2bdeb36deadcd5d2f46dd8e72e1bc99a06e305c758a228ef499351220f86c01"), BufferUtils.fromHex("ecdd4913aa1bfeb22d22b1c91b3945eb4ce3018bb7f900ba2bee6fefd6b44b03"), BufferUtils.fromHex("36b71860698c9efbb302c88bae15824be1a0ceabaa7b0c6212851321be6e5e08"), BufferUtils.fromHex("a2949fdc45b8b723c523540964df3d3782139e0dcb65c8145d2556cf5490a202")],
            delinearizedPubKeys: [BufferUtils.fromHex("48ecd45dcef9a84152cf5aa7ed7f2c884aaafab4a8c7d18b0074169ffc442f1f"), BufferUtils.fromHex("39a191c2c6eabb8b0485ea00fe5b7da022a4fa95a8c62c9e51421338f33dea34"), BufferUtils.fromHex("9b9e0b154168d124d35eda474592119e6425bceb90be32d0cc9961c9ec9f1597"), BufferUtils.fromHex("25c98cb4a563c88c9ac4945e1ba0e83d2ecf6b7624a8f94c9f8a8f3640156079")],
            secrets: [BufferUtils.fromHex("d8bf664734b0fe7ad84dacd52b0c1aab7b42b1c87de456e666b0473446cee50d"), BufferUtils.fromHex("df62a5936edf38fdebf1b77c0e88b67a3c3049c20e9b82042d18e799d9147f"), BufferUtils.fromHex("62f9d569b6a4923a282d6ae5459f4fb9a75a1ac237906198edeb7d71e174b50e"), BufferUtils.fromHex("203b3e15c22c24279abaadbb321e2b4d39e1c91183fa20698309f5f1f6154903")],
            commitments: [BufferUtils.fromHex("b3a8765c83f09db199140b9f877d116b7f70d464004cf7a856f089043ed5623c"), BufferUtils.fromHex("efb62e6a34cc50f54118cc4e3a5123cafe440af4245060c7a8bfe0e9de99dac2"), BufferUtils.fromHex("1e1d1dfff9ad5e360df85e4ca9496b51fbfc0696a67cfd9e6f6b34a07e3c69e5"), BufferUtils.fromHex("74b01bb35dbed39588e3810635b709ecd4547e1f9c4376d5ce3ee5416bbf5e38")],
            aggCommitment: BufferUtils.fromHex("640d9c1a5e918fed8e28db6c0d3270ff1c45fed558a00215ad42326c77d1b7f8"),
            aggPubKey: BufferUtils.fromHex("a4f7798ee2e1adf96053b443cc3e2c42d94b15e3fec5ae8637c05b71cc90f7b6"),
            partialSignatures: [BufferUtils.fromHex("9ca3d1ebab436b3309cd37be7a81f3778f1831ae91ee446ae056d1baa8e30b0a"), BufferUtils.fromHex("1fcc5bca7d16245d34a6b363586f20f7280eacf42b9ddeeaa664501fd1a09a0f"), BufferUtils.fromHex("03e7274c1c8a2a2aeb306a1331a26431c8a80ec84bd2717eb6a4e6b66f4c090d"), BufferUtils.fromHex("9800eb815f4df822198970b032871ec364a6951cd47f5e49e0bc0819968e8102")],
            aggSignature: BufferUtils.fromHex("7caf54ca706b8d2d95f3d69f7926d939e5758187ddddf31c1e1d11aa7f5f3109"),
            signature: BufferUtils.fromHex("640d9c1a5e918fed8e28db6c0d3270ff1c45fed558a00215ad42326c77d1b7f87caf54ca706b8d2d95f3d69f7926d939e5758187ddddf31c1e1d11aa7f5f3109"),
            message: BufferUtils.fromAscii("Hello World")
        },
        {
            privKeys: [BufferUtils.fromHex("223dcd7ada5dd16cf4d161b293721ebb732f0f5821f2a555bbe6def499364707"), BufferUtils.fromHex("283f4c6a4674791e0e24c97c2ec958f3fa87ab42b085824d475b16ca49c35604"), BufferUtils.fromHex("6a828f4a5c6de5f4f6ccd846549d2eb6c961e950a1fe32523ea7bdbe28291a07"), BufferUtils.fromHex("1f89b89ce7e31335fb7080756b1ed5e6dcf947250b1d13e7c8c6713c38b98801"), BufferUtils.fromHex("6ad88c8c37d8f054fbad5af4f17ebc24ce2bd7eda6bd543f59f3ee70601a7f06")],
            pubKeys: [BufferUtils.fromHex("8870e57b18faa37111e971b32c844e2bdbf773179f9103057b43478aa039ef7a"), BufferUtils.fromHex("12d92aa661c24dae4ee63e4273fd5ca9ccffdc746e6f8cd72b2458360f957562"), BufferUtils.fromHex("1b6b9187d22d56baf6191770a844da0c3286aa9df9baaf02c3bf94f14a833f61"), BufferUtils.fromHex("b7248fbcdbc09ac7fa8af4971ac2f9e77a9743a0ebb344c6499e76c498fae579"), BufferUtils.fromHex("6239f2e0f51221d11c8a02f34f15f0cfcf64155bd33817c9c794dabd925dbcea")],
            pubKeysHash: BufferUtils.fromHex("b795f34048fc0fcd8ee7d7dc2a48f45a66e6cf7a0b800d912f0a685c136a4d826ea0c6412a6428db876b398abb7b52931ba3102a85ad81b0ec7f547c4272ce9b"),
            delinearizedPrivKeys: [BufferUtils.fromHex("730f544f56b4280a92212c20deeb3bb0e24e44ee6f98b13102db052121d5a104"), BufferUtils.fromHex("d779e3b4a43a9ce9edf4fc4781c9200b23789b8aec9c9ff84cc012ce93821b0d"), BufferUtils.fromHex("a330bc92ebc6fa244b11a368cfd79fbafb7da370a58679773437be9bab8cc903"), BufferUtils.fromHex("587171c14d9adead708dc0b003806bcac0c07d3277ac4ca373b43e4aff32130e"), BufferUtils.fromHex("7be213bf031e0f8bc9c1ea57d05c430363eddef6af79f8bd165069850941c00d")],
            delinearizedPubKeys: [BufferUtils.fromHex("335253f4754ffbc52013d4cd383f84fd9359c52f7a15fc7d49f8def5e98d36b4"), BufferUtils.fromHex("9cf9986122407edccb94cccd1ef20ec5fbbdae9c66a1e9dd51e5838aa4099013"), BufferUtils.fromHex("4f6b692774205dbcddda8d6e4456c51fda5eb722ba19b7929df213ef24fb8974"), BufferUtils.fromHex("f0fe119bac035c25edada3ec6aa756ba79a4668caf652084e8ddf4d90e0d451d"), BufferUtils.fromHex("6f0da8e2730d3ca10340c2e935a388ee6e90a879db62cbb0c278ac538a40d437")],
            secrets: [BufferUtils.fromHex("31313231623461663039666262653365353739623235336234666236636538616639316430396264623630306536316435636137653137316333383863373039"), BufferUtils.fromHex("66656264353737356237353030636332346230616334373961663661366630383837376634626261643438313836656437343164623433613030663863623033"), BufferUtils.fromHex("32663838356565626338356263376633316632313131316134346333656164363164373639643061356436303165653039653032653238393030306530353032"), BufferUtils.fromHex("33383266613838623939623236353465313863363065643564306365373963613636623563336562366464346130303539653063636166626464383863623035"), BufferUtils.fromHex("63323166653561373530316461343932653734326366356634626461396562336636326230383166636663363232393732636431376539393336366333643061")],
            commitments: [BufferUtils.fromHex("5cadf09a490b4187e7189caf199ac88498f9b1f5d630cc9a168384cf8c4d5ff0"), BufferUtils.fromHex("91364d6bb88a556909dc6f63dc78e596fb1845b2306527a8d4d3a5125e51573f"), BufferUtils.fromHex("719199500c32a37750b3995576106bc6e606a6227716fa1eca785f56a89601bd"), BufferUtils.fromHex("3da1e1a3f51446fec43c7eff73b4d95363ad53cfa01b055f6351650f312326c6"), BufferUtils.fromHex("6239237ea2665c0c1e2272a1f88538004e6c81b7f2ae12a3dd6129f526b79bd6")],
            aggCommitment: BufferUtils.fromHex("fb47050dbf537b8b383884a743ea36002bf74b54b358c17b039d4a1cb6344316"),
            aggPubKey: BufferUtils.fromHex("0bf44a403c18cb317875afe02c2b19ffc2a16980a06190951e2127ebf98d327e"),
            partialSignatures: [BufferUtils.fromHex("118871813ed4f1f4ff754990a0995b89abf6f37d4a8dfc14bee256f2b7710106"), BufferUtils.fromHex("0aab00cd491e6120e05405b0f2ea75000ab079bc4382b1ffd822ae4125430302"), BufferUtils.fromHex("df23e6edd6ce6f12dbb3e9954fcbc276090ebc360d317680b251f331e2313802"), BufferUtils.fromHex("b4654c37c22d32fa9a7424624794575c5cb72a83306321d406cd0bb66c275d03"), BufferUtils.fromHex("f7fbc01438cd0f5e1a372ed333760b65a30f4cc7243913b5a44d80800d51e706")],
            aggSignature: BufferUtils.fromHex("b8e46f2b3f59f2279a8d93687f6018adbe7ba0bbf0dc581ef571849c395f8104"),
            signature: BufferUtils.fromHex("fb47050dbf537b8b383884a743ea36002bf74b54b358c17b039d4a1cb6344316b8e46f2b3f59f2279a8d93687f6018adbe7ba0bbf0dc581ef571849c395f8104"),
            message: BufferUtils.fromAscii("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        }
    ];

    it('can create keys of proposed size', (done) => {
        (async function () {
            const keyPair = await Crypto.keyPairGenerate();
            expect(Crypto.publicKeySerialize(Crypto.keyPairPublic(keyPair)).byteLength).toEqual(Crypto.publicKeySize);
            expect(Crypto.privateKeySerialize(Crypto.keyPairPrivate(keyPair)).byteLength).toEqual(Crypto.privateKeySize);
        })().then(done, done.fail);
    });

    it('can serialize, unserialize keys and use them afterwards', (done) => {
        (async function () {
            const keyPair = await Crypto.keyPairGenerate();
            const data = new Uint8Array([1, 2, 3]);
            const data2 = new Uint8Array([1, 2, 4]);
            const privateSerialized = Crypto.privateKeySerialize(Crypto.keyPairPrivate(keyPair));
            const publicSerialized = Crypto.publicKeySerialize(Crypto.keyPairPublic(keyPair));
            const sign = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair), Crypto.keyPairPublic(keyPair), data);
            const verify = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), data, sign);
            const falsify = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), data2, sign);

            const privateUnserialized = Crypto.privateKeyUnserialize(privateSerialized);
            const publicUnserialized = Crypto.publicKeyUnserialize(publicSerialized);

            const verify2 = await Crypto.signatureVerify(publicUnserialized, data, sign);
            expect(verify2).toBe(verify);

            const falsify2 = await Crypto.signatureVerify(publicUnserialized, data2, sign);
            expect(falsify2).toBe(falsify);

            const sign2 = await Crypto.signatureCreate(privateUnserialized, publicUnserialized, data);
            expect(sign2.length).toBe(sign.length);
        })().then(done, done.fail);
    });

    it('can derive a functional key pair from private key', (done) => {
        (async function () {
            const keyPair = await Crypto.keyPairGenerate();
            const data = new Uint8Array([1, 2, 3]);
            const keyPair2 = await Crypto.keyPairDerive(Crypto.keyPairPrivate(keyPair));

            const sign = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair), Crypto.keyPairPublic(keyPair), data);
            const verify = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), data, sign);
            expect(verify).toBe(true, 'can verify original with original key');
            const verify2 = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair2), data, sign);
            expect(verify2).toBe(true, 'can verify original with derived key');

            const sign2 = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair2), Crypto.keyPairPublic(keyPair2), data);
            const verify3 = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), data, sign2);
            expect(verify3).toBe(true, 'can verify derived with original key');
            const verify4 = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair2), data, sign2);
            expect(verify4).toBe(true, 'can verify derived with derived key');
        })().then(done, done.fail);
    });

    it('can verify RFC8032 test vectors', (done) => {
        // For the test vectors see https://tools.ietf.org/html/rfc8032#page-24
        // For a test of all test vectors see: https://github.com/danimoh/ed25519/tree/master/test
        function hexToBytes(hexString) {
            const byteCount = hexString.length / 2; // 2 hex chars per byte
            const result = new Uint8Array(byteCount);
            for (let i=0; i<byteCount; ++i) {
                result[i] = parseInt(hexString.substr(i * 2, 2), 16);
            }
            return result;
        }

        (async function () {
            const testCases = [
                {
                    priv: '9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60',
                    pub: 'd75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a',
                    sig: 'e5564300c360ac729086e2cc806e828a84877f1eb8e5d974d873e065224901555fb8821590a33bacc61e39701cf9b46bd25bf5f0595bbe24655141438e7a100b',
                    msg: ''
                }, {
                    priv: '4ccd089b28ff96da9db6c346ec114e0f5b8a319f35aba624da8cf6ed4fb8a6fb',
                    pub: '3d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660c',
                    sig: '92a009a9f0d4cab8720e820b5f642540a2b27b5416503f8fb3762223ebdb69da085ac1e43e15996e458f3613d0f11d8c387b2eaeb4302aeeb00d291612bb0c00',
                    msg: '72'
                }, {
                    priv: 'c5aa8df43f9f837bedb7442f31dcb7b166d38535076f094b85ce3a2e0b4458f7',
                    pub: 'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',
                    sig: '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',
                    msg: 'af82'
                }, {
                    priv: 'f5e5767cf153319517630f226876b86c8160cc583bc013744c6bf255f5cc0ee5',
                    pub: '278117fc144c72340f67d0f2316e8386ceffbf2b2428c9c51fef7c597f1d426e',
                    sig: '0aab4c900501b3e24d7cdf4663326a3a87df5e4843b2cbdb67cbf6e460fec350aa5371b1508f9f4528ecea23c436d94b5e8fcd4f681e30a6ac00a9704a188a03',
                    msg: '08b8b2b733424243760fe426a4b54908632110a66c2f6591eabd3345e3e4eb98fa6e264bf09efe12ee50f8f54e9f77b1e355f6c50544e23fb1433ddf73be84d879de7c0046dc4996d9e773f4bc9efe5738829adb26c81b37c93a1b270b20329d658675fc6ea534e0810a4432826bf58c941efb65d57a338bbd2e26640f89ffbc1a858efcb8550ee3a5e1998bd177e93a7363c344fe6b199ee5d02e82d522c4feba15452f80288a821a579116ec6dad2b3b310da903401aa62100ab5d1a36553e06203b33890cc9b832f79ef80560ccb9a39ce767967ed628c6ad573cb116dbefefd75499da96bd68a8a97b928a8bbc103b6621fcde2beca1231d206be6cd9ec7aff6f6c94fcd7204ed3455c68c83f4a41da4af2b74ef5c53f1d8ac70bdcb7ed185ce81bd84359d44254d95629e9855a94a7c1958d1f8ada5d0532ed8a5aa3fb2d17ba70eb6248e594e1a2297acbbb39d502f1a8c6eb6f1ce22b3de1a1f40cc24554119a831a9aad6079cad88425de6bde1a9187ebb6092cf67bf2b13fd65f27088d78b7e883c8759d2c4f5c65adb7553878ad575f9fad878e80a0c9ba63bcbcc2732e69485bbc9c90bfbd62481d9089beccf80cfe2df16a2cf65bd92dd597b0707e0917af48bbb75fed413d238f5555a7a569d80c3414a8d0859dc65a46128bab27af87a71314f318c782b23ebfe808b82b0ce26401d2e22f04d83d1255dc51addd3b75a2b1ae0784504df543af8969be3ea7082ff7fc9888c144da2af58429ec96031dbcad3dad9af0dcbaaaf268cb8fcffead94f3c7ca495e056a9b47acdb751fb73e666c6c655ade8297297d07ad1ba5e43f1bca32301651339e22904cc8c42f58c30c04aafdb038dda0847dd988dcda6f3bfd15c4b4c4525004aa06eeff8ca61783aacec57fb3d1f92b0fe2fd1a85f6724517b65e614ad6808d6f6ee34dff7310fdc82aebfd904b01e1dc54b2927094b2db68d6f903b68401adebf5a7e08d78ff4ef5d63653a65040cf9bfd4aca7984a74d37145986780fc0b16ac451649de6188a7dbdf191f64b5fc5e2ab47b57f7f7276cd419c17a3ca8e1b939ae49e488acba6b965610b5480109c8b17b80e1b7b750dfc7598d5d5011fd2dcc5600a32ef5b52a1ecc820e308aa342721aac0943bf6686b64b2579376504ccc493d97e6aed3fb0f9cd71a43dd497f01f17c0e2cb3797aa2a2f256656168e6c496afc5fb93246f6b1116398a346f1a641f3b041e989f7914f90cc2c7fff357876e506b50d334ba77c225bc307ba537152f3f1610e4eafe595f6d9d90d11faa933a15ef1369546868a7f3a45a96768d40fd9d03412c091c6315cf4fde7cb68606937380db2eaaa707b4c4185c32eddcdd306705e4dc1ffc872eeee475a64dfac86aba41c0618983f8741c5ef68d3a101e8a3b8cac60c905c15fc910840b94c00a0b9d0'
                }, {
                    // this test case is taken from https://tools.ietf.org/html/rfc8032#page-27
                    priv: '833fe62409237b9d62ec77587520911e9a759cec1d19755b7da901b96dca3d42',
                    pub: 'ec172b93ad5e563bf4932c70e1245034c35467ef2efd4d64ebf819683467e2bf',
                    sig: 'dc2a4459e7369633a52b1bf277839a00201009a3efbf3ecb69bea2186c26b58909351fc9ac90b3ecfdfbc7c66431e0303dca179c138ac17ad9bef1177331a704',
                    msg: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
                }
            ];

            for (const testCase of testCases) {
                /* eslint-disable no-await-in-loop */
                const privateKey = hexToBytes(testCase.priv);
                const referencePublicKey = hexToBytes(testCase.pub);
                const referenceSignature = hexToBytes(testCase.sig);
                const message = hexToBytes(testCase.msg);

                const computedPublicKey = await Crypto.publicKeyDerive(privateKey);
                expect(BufferUtils.equals(referencePublicKey, computedPublicKey)).toBe(true, 'calculated wrong public key');

                const computedSignature = await Crypto.signatureCreate(privateKey, referencePublicKey, message);
                expect(BufferUtils.equals(referenceSignature, computedSignature)).toBe(true, 'calculated wrong signature');

                expect(await Crypto.signatureVerify(referencePublicKey, message, referenceSignature)).toBe(true, 'could not verify valid signature');

                // try whether the signature also verifies for a manipulated message
                let forgedMessage;
                if (message.byteLength === 0) {
                    forgedMessage = new Uint8Array([42]);
                } else {
                    // change the last byte as in http://ed25519.cr.yp.to/python/sign.py
                    forgedMessage = new Uint8Array(message);
                    forgedMessage[forgedMessage.length-1]++;
                }
                expect(await Crypto.signatureVerify(referencePublicKey, forgedMessage, referenceSignature)).toBe(false, 'Accepted signature for wrong message');

                // try whether a manipulated signature verifies the original message
                // change a single bit of a single byte
                computedSignature[Math.floor(Math.random() * Crypto.signatureSize)] ^= 1 << (Math.floor(Math.random() * 8));
                expect(await Crypto.signatureVerify(referencePublicKey, forgedMessage, referenceSignature)).toBe(false, 'Accepted wrong signature');
                /* eslint-enable no-await-in-loop */
            }
        })().then(done, done.fail);
    });

    it('can verify custom signature set', (done) => {
        (async function () {
            const testData = [
                [
                    '/wkQNXvCZ5/y1Sw/JjtQP8AliE552VZJxqRmyYqvKoP2HJ+odLyneb3b4f45VlRj/+NGKTpysWVgyMkfdo0zDg==', // signature
                    'W8uW2Jrl/pfj3JfJWWTYVeL2E/TobX+yipKxFLeVfGU=', // pub key
                    'AAF2F6Gc0OZmc8W/5CRs1A0G0Y+s7QK+4oBhQTYHJ8jHr50cj2/StGARCqGkqNKvGoi6xom8JPmxOdsvQUjIfenWztto/gO1+//6q+jM1LHWoTl4BL1Br1HZegAAAEGfUdl4AAAAAAAAAg==' // data
                ],
                [
                    'rA3GsMGnrTTnfSaQM5qcKfxGWeQXvIFIl5TA+DJVTXK+Rm2lkQcF8XIb/fMnMznchRHh/O34n7yxN2F+X5niBg==',
                    'c7+7HyyPJntaosgJJhjtncRiiQx1Qm7xceih1FZukE0=',
                    'AAEAUCcJnHMAKL3oovwLVzrimvAElh5YHi07RQLO4ZXCxdIbEvjxV0ilfWBcq9BObQGyTLhbt04/SaDl2j4XC1mSHouh62k1wVYQkY9TFDgqnJiuvP7nQfKgXyAAAAAAAAAAAAAAAAAAAAE='
                ]
            ];

            for (const entry of testData) {
                expect(await Crypto.signatureVerify(
                    Crypto.publicKeyUnserialize(BufferUtils.fromBase64(entry[1])),
                    BufferUtils.fromBase64(entry[2]),
                    Crypto.signatureUnserialize(BufferUtils.fromBase64(entry[0])))
                ).toBeTruthy();
            }
        })().then(done, done.fail);
    });

    it('can sign and verify data', (done) => {
        // http://www.ietf.org/rfc/rfc6090.txt
        (async function () {
            const dataToSign = BufferUtils.fromAscii('test data to sign');
            const keyPair = await Crypto.keyPairGenerate();
            const signature = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair), Crypto.keyPairPublic(keyPair), dataToSign);
            const proof = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), dataToSign, signature);
            expect(proof).toEqual(true);
        })().then(done, done.fail);
    });

    it('can verify serialized signature', (done) => {
        (async function () {
            const dataToSign = BufferUtils.fromAscii('test data to sign');
            const keyPair = await Crypto.keyPairGenerate();
            const signature = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair), Crypto.keyPairPublic(keyPair), dataToSign);
            const proof = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), dataToSign, Crypto.signatureUnserialize(Crypto.signatureSerialize(signature)));
            expect(proof).toEqual(true);
        })().then(done, done.fail);
    });

    it('can detect wrong signatures', (done) => {
        (async function () {
            const dataToSign = BufferUtils.fromAscii('test data to sign');
            const wrongData = BufferUtils.fromAscii('wrong test data to sign');
            const keyPair = await Crypto.keyPairGenerate();
            const signature = await Crypto.signatureCreate(Crypto.keyPairPrivate(keyPair), Crypto.keyPairPublic(keyPair), dataToSign);
            const proof = await Crypto.signatureVerify(Crypto.keyPairPublic(keyPair), wrongData, signature);
            expect(proof).toEqual(false);
        })().then(done, done.fail);
    });

    it('can hash data with blake2b', (done) => {
        (async function () {
            const dataToHash = BufferUtils.fromAscii('hello');
            const expectedHash = Dummy.hash1;
            const hash = await Crypto.blake2b(dataToHash);
            expect(BufferUtils.toBase64(hash)).toBe(expectedHash);
        })().then(done, done.fail);
    });

    it('correctly aggregates commitments', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                const aggCommitment = await Crypto.aggregateCommitments(testCase.commitments);
                expect(BufferUtils.equals(aggCommitment, testCase.aggCommitment)).toBe(true);
            }
        })().then(done, done.fail);
    });

    it('correctly aggregates partial signatures', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                const aggSignatures = await Crypto.aggregatePartialSignatures(testCase.partialSignatures);
                expect(BufferUtils.equals(aggSignatures, testCase.aggSignature)).toBe(true);
            }
        })().then(done, done.fail);
    });

    it('correctly combines partial signatures', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                const signature = await Crypto.combinePartialSignatures(testCase.aggCommitment, testCase.partialSignatures);
                expect(BufferUtils.equals(signature, testCase.signature)).toBe(true, 'could not compute signature correctly');
                const result = await Crypto.signatureVerify(testCase.aggPubKey, testCase.message, signature);
                expect(result).toBe(true, 'could not verify signature');
            }
        })().then(done, done.fail);
    });

    it('correctly derives the public key', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                for (let i = 0; i < testCase.pubKeys.length; ++i) {
                    const pubKey = await Crypto.publicKeyDerive(testCase.privKeys[i]);
                    expect(BufferUtils.equals(pubKey, testCase.pubKeys[i])).toBe(true);
                }
            }
        })().then(done, done.fail);
    });

    it('correctly computes public keys hash', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                const publicKeysHash = await Crypto.hashPublicKeys(testCase.pubKeys);
                expect(BufferUtils.equals(publicKeysHash, testCase.pubKeysHash)).toBe(true);
            }
        })().then(done, done.fail);
    });

    it('correctly derives the delinearized private key', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                for (let i = 0; i < testCase.privKeys.length; ++i) {
                    const delinearizedPrivKey = await Crypto.delinearizePrivateKey(testCase.pubKeys, testCase.pubKeys[i], testCase.privKeys[i]);
                    expect(BufferUtils.equals(delinearizedPrivKey, testCase.delinearizedPrivKeys[i])).toBe(true);
                }
            }
        })().then(done, done.fail);
    });

    it('correctly derives the delinearized public key', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                for (let i = 0; i < testCase.pubKeys.length; ++i) {
                    const delinearizedPubKey = await Crypto.delinearizePublicKey(testCase.pubKeys, testCase.pubKeys[i]);
                    expect(BufferUtils.equals(delinearizedPubKey, testCase.delinearizedPubKeys[i])).toBe(true);
                }
            }
        })().then(done, done.fail);
    });

    it('correctly aggregates and delinearizes public keys', (done) => {
        (async function () {
            for (const testCase of partialSignatureTestVectors) {
                const delinearizedPubKeys = [];
                for (let i = 0; i < testCase.pubKeys.length; ++i) {
                    const delinearizedPubKey = await Crypto.delinearizePublicKey(testCase.pubKeys, testCase.pubKeys[i]);
                    delinearizedPubKeys.push(delinearizedPubKey);
                }
                const aggregatePubKey = await Crypto.delinearizeAndAggregatePublicKeys(testCase.pubKeys);
                expect(BufferUtils.equals(aggregatePubKey, testCase.aggPubKey)).toBe(true);
            }
        })().then(done, done.fail);
    });

    it('can create valid delinearized multisignatures', (done) => {
        (async function () {
            const message = BufferUtils.fromAscii('to be authenticated');
            const pubKeys = [], privKeys = [], secrets = [], commitments = [], partialSignatures = [];
            for (let i = 0; i < 3; ++i) {
                const keyPair = await Crypto.keyPairGenerate();
                const nonce = await Crypto.commitmentPairGenerate();

                // pubKeys.push(partialSignatureTestVectors[3].pubKeys[i]);
                // privKeys.push(partialSignatureTestVectors[3].privKeys[i]);
                pubKeys.push(keyPair.publicKey);
                privKeys.push(keyPair.privateKey);
                secrets.push(nonce.secret);
                commitments.push(nonce.commitment);
            }

            const aggCommitment = await Crypto.aggregateCommitments(commitments);
            const aggPubKey = await Crypto.delinearizeAndAggregatePublicKeys(pubKeys);
            for (let i = 0; i < 3; ++i) {
                const partialSignature = await Crypto.delinearizedPartialSignatureCreate(privKeys[i], pubKeys[i], pubKeys, secrets[i], aggCommitment, message);
                partialSignatures.push(partialSignature);
            }

            const signature = await Crypto.combinePartialSignatures(aggCommitment, partialSignatures);
            expect(await Crypto.signatureVerify(aggPubKey, message, signature)).toBe(true);
        })().then(done, done.fail);
    });
});
