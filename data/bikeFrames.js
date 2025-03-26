const bikeFrames = [
    // Road Bikes
    { name: "BMC Roadmachine", type: "road", flatFactor: 1.002, climbFactor: 1.005, flat0: 7.7892604839000175, flat5: 35.124879512926995, climb0: 18.81171984486516, climb5: 54.401460091907225 },
    { name: "BMC SLR01", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 8.52133383765044, flat5: 35.827669932526966, climb0: 27.415832871622744, climb5: 63.3575595606684 },
    { name: "BMC TeamMachine", type: "road", flatFactor: 1.012, climbFactor: 1.010, flat0: 41.59640796007741, flat5: 69.75194914530408, climb0: 37.0367956197241, climb5: 73.25228954144006 },
    { name: "Bridgestone Anchor RS9s", type: "road", flatFactor: 1.002, climbFactor: 1.011, flat0: 9.092351053575184, flat5: 30.234629509876648, climb0: 39.77446794641954, climb5: 98.90819020304416 },
    { name: "Cannondale CAAD12", type: "road", flatFactor: 1.002, climbFactor: 1.000, flat0: 6.764357788650263, flat5: 34.04141094937685, climb0: -1.4861649773490304, climb5: 34.72932894436623 },
    { name: "Cannondale CAAD13", type: "road", flatFactor: 1.016, climbFactor: 1.008, flat0: 58.419453629253255, flat5: 86.31144840713002, climb0: 28.784669034970115, climb5: 66.09523188736452 },
    { name: "Cannondale EVO", type: "road", flatFactor: 1.003, climbFactor: 1.012, flat0: 9.34125599385014, flat5: 36.691516489952086, climb0: 42.35570185444702, climb5: 79.23605905550318 },
    { name: "Cannondale Super Six Evo", type: "road", flatFactor: 1.013, climbFactor: 1.011, flat0: 45.432472333727546, flat5: 73.5148061835794, climb0: 41.182413714434595, climb5: 78.21920933415869 },
    { name: "Cannondale SuperSix Evo LAB71", type: "road", flatFactor: 1.017, climbFactor: 1.015, flat0: 61.40631291255377, flat5: 89.41543942703026, climb0: 52.32865104455198, climb5: 89.67832350161338 },
    { name: "Cannondale Synapse", type: "road", flatFactor: 1.002, climbFactor: 1.007, flat0: 8.243145963225029, flat5: 35.53484059102711, climb0: 23.348433986246228, climb5: 60.111462373300725 },
    { name: "Cannondale System Six", type: "road", flatFactor: 1.017, climbFactor: 1.004, flat0: 61.04027623567856, flat5: 89.54721263070547, climb0: 12.3586350747968, climb5: 48.53501939184577 },
    { name: "Canyon Aeroad 2015", type: "road", flatFactor: 1.016, climbFactor: 1.005, flat0: 57.05779719127823, flat5: 85.4915262509303, climb0: 16.074047518169724, climb5: 52.289541439884985 },
    { name: "Canyon Aeroad 2021", type: "road", flatFactor: 1.017, climbFactor: 1.011, flat0: 60.41069315145342, flat5: 88.69800754035532, climb0: 38.91405664374371, climb5: 75.55975621679724 },
    { name: "Canyon Aeroad 2024", type: "road", flatFactor: 1.018, climbFactor: 1.012, flat0: 63.016874290803756, flat5: 91.49452775168022, climb0: 42.70768829645061, climb5: 80.17468956751298 },
    { name: "Canyon Ultimate", type: "road", flatFactor: 1.003, climbFactor: 1.010, flat0: 9.01914371820035, flat5: 36.325479813076875, climb0: 36.64569957305353, climb5: 73.09585112277142 },
    { name: "Canyon Ultimate CFR", type: "road", flatFactor: 1.003, climbFactor: 1.012, flat0: 9.268048658475307, flat5: 36.691516489952086, climb0: 43.09878434312119, climb5: 78.92318221816657 },
    { name: "Cervelo R5", type: "road", flatFactor: 1.003, climbFactor: 1.010, flat0: 9.546236532900195, flat5: 36.26691394477701, climb0: 34.88576736303488, climb5: 71.37502851741976 },
    { name: "Cervelo S3D", type: "road", flatFactor: 1.014, climbFactor: 1.001, flat0: 52.28467892482813, flat5: 80.92338852352975, climb0: 3.715412443372229, climb5: 39.73535834175255 },
    { name: "Cervelo S5 2015", type: "road", flatFactor: 1.017, climbFactor: 1.008, flat0: 61.84555692480381, flat5: 90.87958613453058, climb0: 29.64508033764594, climb5: 65.89968386402889 },
    { name: "Cervelo S5 2020", type: "road", flatFactor: 1.017, climbFactor: 1.009, flat0: 62.387291206578624, flat5: 90.99671787113031, climb0: 30.231724407652152, climb5: 67.1511912133753 },
    { name: "Chapter2 Koko", type: "road", flatFactor: 1.005, climbFactor: 1.009, flat0: 17.408704352176088, flat5: 44.52470137507752, climb0: 31.13124531499497, climb5: 68.32447935338772 },
    { name: "Chapter2 Rere", type: "road", flatFactor: 1.004, climbFactor: 1.002, flat0: 14.509693871325902, flat5: 41.91852023572719, climb0: 6.961509630739903, climb5: 42.7467979011176 },
    { name: "Chapter2 Tere", type: "road", flatFactor: 1.003, climbFactor: 1.010, flat0: 8.97521931697545, flat5: 36.25227247770204, climb0: 34.88576736303488, climb5: 71.2576997034188 },
    { name: "Chapter2 Toa", type: "road", flatFactor: 1.016, climbFactor: 1.010, flat0: 59.44435632450353, flat5: 87.51204870728041, climb0: 37.545220480396345, climb5: 73.99537203011424 },
    { name: "Colnago V3RS", type: "road", flatFactor: 1.002, climbFactor: 1.007, flat0: 8.389560633975218, flat5: 35.53484059102711, climb0: 23.778639637584487, climb5: 59.95502395463277 },
    { name: "Cube Litening", type: "road", flatFactor: 1.002, climbFactor: 1.009, flat0: 8.858087580375194, flat5: 36.14978220817675, climb0: 33.71247922302245, climb5: 69.06756184206259 },
    { name: "Cube Litening C:68X", type: "road", flatFactor: 1.003, climbFactor: 1.012, flat0: 9.180199856025505, flat5: 36.589026220426796, climb0: 41.61261936577216, climb5: 78.80585340416492 },
    { name: "Factor One", type: "road", flatFactor: 1.014, climbFactor: 1.003, flat0: 51.53796410400275, flat5: 79.83991995997961, climb0: 10.16849721344059, climb5: 45.99289508848528 },
    { name: "Felt AR", type: "road", flatFactor: 1.017, climbFactor: 1.010, flat0: 62.63619614685358, flat5: 91.2309813443303, climb0: 35.55063064237507, climb5: 71.68790535475637 },
    { name: "Felt FR", type: "road", flatFactor: 1.007, climbFactor: 1.011, flat0: 26.96958235215125, flat5: 54.64195512390299, climb0: 38.56207020174013, climb5: 74.54290649545345 },
    { name: "Focus Izalco Max", type: "road", flatFactor: 1.016, climbFactor: 1.008, flat0: 56.1061018314033, flat5: 84.68624556180507, climb0: 29.29309389564235, climb5: 66.09523188736452 },
    { name: "Giant Propel Advanced SL Disc", type: "road", flatFactor: 1.016, climbFactor: 1.007, flat0: 56.428214107053094, flat5: 84.86194316670519, climb0: 24.48261252159167, climb5: 61.167421699312186 },
    { name: "Giant TCR Advanced SL", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 8.623824107175206, flat5: 35.915518734976764, climb0: 30.036176384317212, climb5: 65.43036860802364 },
    { name: "Giant TCR BikeExchange-Jayco Team", type: "road", flatFactor: 1.007, climbFactor: 1.005, flat0: 25.87147232152614, flat5: 53.48527922497801, climb0: 15.917609099501076, climb5: 51.66378776521179 },
    { name: "Liv Langma Advanced SL", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 8.667748508400106, flat5: 49.95668565990269, climb0: 29.175765081641387, climb5: 56.161392301925865 },
    { name: "Liv Langma SL Advanced Disc", type: "road", flatFactor: 1.007, climbFactor: 1.009, flat0: 26.442489537451404, flat5: 54.39305018362803, climb0: 32.81295831567964, climb5: 69.26310986539752 },
    { name: "Moots Vamoots RCS", type: "road", flatFactor: 1.002, climbFactor: 0.998, flat0: 6.3104723093252515, flat5: 33.8364304103268, climb0: -6.022879118730099, climb5: 29.918847570315556 },
    { name: "Mosaic RT-1d", type: "road", flatFactor: 1.002, climbFactor: 0.998, flat0: 6.41296257885002, flat5: 33.807147476176866, climb0: -5.710002281393497, climb5: 29.879737965648566 },
    { name: "Parlee ESX", type: "road", flatFactor: 1.007, climbFactor: 1.004, flat0: 25.842189387376205, flat5: 53.44135482375311, climb0: 14.392334517485057, climb5: 50.41228041586538 },
    { name: "Parlee RZ7", type: "road", flatFactor: 1.012, climbFactor: 1.003, flat0: 43.26553520662726, flat5: 71.43571785892942, climb0: 14.353224912818067, climb5: 49.63008832252353 },
    { name: "Pinarello Dogma 65.1", type: "road", flatFactor: 1.007, climbFactor: 1.000, flat0: 24.934418428726183, flat5: 52.65071560170282, climb0: -0.9386305120098044, climb5: 35.04220578170283 },
    { name: "Pinarello Dogma F 2021", type: "road", flatFactor: 1.016, climbFactor: 1.012, flat0: 56.54534584365335, flat5: 85.11084810698014, climb0: 42.94234592445324, climb5: 80.096470358179 },
    { name: "Pinarello Dogma F 2024", type: "road", flatFactor: 1.017, climbFactor: 1.013, flat0: 62.21159360167851, flat5: 90.33785185275525, climb0: 47.2052928331647, climb5: 84.90695173222969 },
    { name: "Pinarello Dogma F10", type: "road", flatFactor: 1.013, climbFactor: 1.007, flat0: 48.433973084103016, flat5: 76.57487280225473, climb0: 26.67275038294788, climb5: 63.31844995600141 },
    { name: "Pinarello Dogma F12", type: "road", flatFactor: 1.015, climbFactor: 1.009, flat0: 52.95818641027816, flat5: 81.15765199672974, climb0: 30.58371084965574, climb5: 66.99475279470734 },
    { name: "Pinarello Dogma X", type: "road", flatFactor: 1.002, climbFactor: 1.007, flat0: 8.345636232750318, flat5: 35.28593565075215, climb0: 25.734119870938073, climb5: 61.98872339732103 },
    { name: "Pinarello F8", type: "road", flatFactor: 1.011, climbFactor: 1.006, flat0: 40.67399553435242, flat5: 68.81489525250413, climb0: 22.096926636899823, climb5: 58.899064628621296 },
    { name: "Ribble Endurance", type: "road", flatFactor: 1.006, climbFactor: 1.002, flat0: 19.72205615002604, flat5: 47.51156065837751, climb0: 5.397125444056896, climb5: 41.41707134243722 },
    { name: "Ridley Helium", type: "road", flatFactor: 1.002, climbFactor: 1.004, flat0: 7.8624678192753725, flat5: 34.861333105577074, climb0: 13.727471238144865, climb5: 49.86474595052616 },
    { name: "Ridley Noah Fast 2019", type: "road", flatFactor: 1.014, climbFactor: 1.003, flat0: 51.43547383447798, flat5: 79.95705169657987, climb0: 11.34178535345302, climb5: 47.04885441449674 },
    { name: "Scott Addict RC", type: "road", flatFactor: 1.014, climbFactor: 1.013, flat0: 50.791249283177876, flat5: 79.07856367207978, climb0: 46.696867972492456, climb5: 83.73366359221725 },
    { name: "Scott Foil 2015", type: "road", flatFactor: 1.004, climbFactor: 1.006, flat0: 15.285691626300702, flat5: 42.66523505655258, climb0: 19.98500798487759, climb5: 56.39604992992849 },
    { name: "Scott Foil 2023", type: "road", flatFactor: 1.016, climbFactor: 1.007, flat0: 56.530704376578385, flat5: 84.55447235812984, climb0: 26.359873545611276, climb5: 62.966463513997816 },
    { name: "Specialized Aethos S-Works", type: "road", flatFactor: 1.013, climbFactor: 1.015, flat0: 46.12062128625254, flat5: 67.80463402432882, climb0: 54.63611771990985, climb5: 114.39559365120766 },
    { name: "Specialized Allez", type: "road", flatFactor: 1.002, climbFactor: 0.999, flat0: 6.530094315450273, flat5: 34.02676948230189, climb0: -3.9109604667078655, climb5: 32.34364305967439 },
    { name: "Specialized Allez Sprint", type: "road", flatFactor: 1.011, climbFactor: 1.007, flat0: 39.619809904952206, flat5: 67.57037055112883, climb0: 23.817749242251477, climb5: 59.68125672196316 },
    { name: "Specialized Amira", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 8.682389975475074, flat5: 36.00336753742709, climb0: 29.605970732978953, climb5: 65.93879346869588 },
    { name: "Specialized Amira S-Works", type: "road", flatFactor: 1.003, climbFactor: 1.010, flat0: 9.01914371820035, flat5: 36.29619687892694, climb0: 36.52837075905187, climb5: 73.21317993677239 },
    { name: "Specialized Roubaix", type: "road", flatFactor: 1.002, climbFactor: 1.005, flat0: 8.023523957100007, flat5: 35.154162447076935, climb0: 17.481993286184082, climb5: 53.580158393899076 },
    { name: "Specialized Roubaix S-Works", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 8.623824107175206, flat5: 49.898119791602824, climb0: 29.097545872306718, climb5: 56.08317309259189 },
    { name: "Specialized Ruby", type: "road", flatFactor: 1.002, climbFactor: 1.005, flat0: 8.00888249002504, flat5: 35.080955111702096, climb0: 16.582472378841267, climb5: 53.5410487892314 },
    { name: "Specialized Ruby S-Works", type: "road", flatFactor: 1.002, climbFactor: 1.008, flat0: 7.96495808880014, flat5: 35.97408460327715, climb0: 29.01932666297274, climb5: 65.5476974220253 },
    { name: "Specialized S-Works Tarmac SL8", type: "road", flatFactor: 1.017, climbFactor: 1.016, flat0: 61.91876426017864, flat5: 89.98645664295553, climb0: 56.435159534595485, climb5: 93.4328455496526 },
    { name: "Specialized Tarmac", type: "road", flatFactor: 1.002, climbFactor: 1.010, flat0: 8.93129491575055, flat5: 36.26691394477701, climb0: 35.31597301437245, climb5: 71.21859009875182 },
    { name: "Specialized Tarmac Pro", type: "road", flatFactor: 1.012, climbFactor: 1.013, flat0: 40.99610781000221, flat5: 68.87346112080401, climb0: 46.26666232115489, climb5: 83.26434833621201 },
    { name: "Specialized Tarmac SL7", type: "road", flatFactor: 1.014, climbFactor: 1.013, flat0: 50.9230224868531, flat5: 79.2542612769799, climb0: 46.657758367825465, climb5: 84.35941726689046 },
    { name: "Specialized Tarmac SL8", type: "road", flatFactor: 1.017, climbFactor: 1.014, flat0: 60.68888102587831, flat5: 88.85906367818048, climb0: 48.37858097317712, climb5: 85.41537659290123 },
    { name: "Specialized Venge 2015", type: "road", flatFactor: 1.017, climbFactor: 1.004, flat0: 60.29356141485369, flat5: 88.90298807940538, climb0: 14.353224912818067, climb5: 49.90385555519314 },
    { name: "Specialized Venge S-Works 2019", type: "road", flatFactor: 1.017, climbFactor: 1.010, flat0: 62.84117668590363, flat5: 91.84592296148047, climb0: 34.92487696770187, climb5: 71.17948049408481 },
    { name: "Trek Emonda", type: "road", flatFactor: 1.003, climbFactor: 1.011, flat0: 9.092351053575184, flat5: 30.278553911101547, climb0: 39.50070071374993, climb5: 98.36065573770495 },
    { name: "Trek Emonda SL", type: "road", flatFactor: 1.002, climbFactor: 1.009, flat0: 8.828804646225262, flat5: 29.7514610964017, climb0: 33.24316396701721, climb5: 91.516474920966 },
    { name: "Trek Madone", type: "road", flatFactor: 1.016, climbFactor: 1.007, flat0: 57.584890005978586, flat5: 86.16503373638035, climb0: 25.421243033601474, climb5: 61.7540657693184 },
    { name: "Uranium Nuclear", type: "road", flatFactor: 1.013, climbFactor: 1.008, flat0: 46.75020437047768, flat5: 74.75933088495418, climb0: 27.84603852296031, climb5: 65.00016295668608 },
    { name: "VanRysel EDR CF", type: "road", flatFactor: 1.002, climbFactor: 1.004, flat0: 7.672128747300285, flat5: 34.77348430312675, climb0: 13.023498354137685, climb5: 48.26125215917616 },
    { name: "Ventum NS1", type: "road", flatFactor: 1.014, climbFactor: 1.003, flat0: 48.78536829390274, flat5: 76.76521187422931, climb0: 9.620962748101364, climb5: 45.875566274484314 },
    { name: "Zwift Aero", type: "road", flatFactor: 1.013, climbFactor: 1.002, flat0: 48.097219341377745, flat5: 75.94528971802961, climb0: 5.358015839389908, climb5: 41.925496203108764 },
    { name: "Zwift Atomic Cruiser", type: "road", flatFactor: 0.995, climbFactor: 0.987, flat0: -16.837687136251343, flat5: 9.663368269500449, climb0: -45.44536062314675, climb5: -11.576442981455642 },
    { name: "Zwift Carbon", type: "road", flatFactor: 1.000, climbFactor: 1.000, flat0: 0, flat5: 26.544979806976173, climb0: 0, climb5: 35.7852882703777 },
    { name: "Zwift Safety", type: "road", flatFactor: 0.998, climbFactor: 0.988, flat0: -6.281189375175838, flat5: 20.92265645017592, climb0: -44.46762050646926, climb5: -9.777401166770012 },
    { name: "Zwift Steel", type: "road", flatFactor: 0.999, climbFactor: 0.991, flat0: -5.124513476250341, flat5: 21.64008833685085, climb0: -31.131245314995663, climb5: 4.6540429553820335 },
    
    // Time Trial Bikes
    { name: "BMC Timemachine01", type: "tt", flatFactor: 1.044, climbFactor: 0.987, flat0: 158.87455923083448, flat5: 207.2646079137126, climb0: -45.9146758791513, climb5: -18.068637356190994 },
    { name: "Cadex Tri", type: "tt", flatFactor: 1.051, climbFactor: 0.989, flat0: 184.73139008528617, flat5: 233.98528532558942, climb0: -38.87494703907742, climb5: -12.554183098132436 },
    { name: "Canyon Speedmax", type: "tt", flatFactor: 1.044, climbFactor: 0.987, flat0: 158.97704950035978, flat5: 207.2206835124877, climb0: -45.68001825114868, climb5: -19.046377472867785 },
    { name: "Canyon Speedmax CF SLX Disc", type: "tt", flatFactor: 1.050, climbFactor: 0.989, flat0: 180.47072316646094, flat5: 229.65141107138888, climb0: -41.4952905517712, climb5: -14.939868982824283 },
    { name: "Cervelo P5", type: "tt", flatFactor: 1.047, climbFactor: 0.990, flat0: 167.93762735026027, flat5: 216.67907124293808, climb0: -34.96398657236886, climb5: -8.721441840758546 },
    { name: "Cervelo PX-Series", type: "tt", flatFactor: 1.049, climbFactor: 0.988, flat0: 176.0343586427356, flat5: 207.8356251296379, climb0: -44.15474366913266, climb5: -7.430824886745152 },
    { name: "Cube Aerium", type: "tt", flatFactor: 1.044, climbFactor: 0.988, flat0: 159.02097390158468, flat5: 207.2646079137126, climb0: -44.66316852980489, climb5: -17.56021249551875 },
    { name: "DiamondBack Andean", type: "tt", flatFactor: 1.044, climbFactor: 0.989, flat0: 159.2845203089346, flat5: 207.48422991983762, climb0: -40.243783202424794, climb5: -13.923019261480503 },
    { name: "Felt IA", type: "tt", flatFactor: 1.050, climbFactor: 0.988, flat0: 175.97579277443575, flat5: 225.31753681718877, climb0: -43.56809959912644, climb5: -16.66069158817594 },
    { name: "Felt IA 2.0", type: "tt", flatFactor: 1.050, climbFactor: 0.991, flat0: 176.34182945131096, flat5: 225.9471199014139, climb0: -33.36049278101886, climb5: -6.3357559560667 },
    { name: "Pinarello Bolide", type: "tt", flatFactor: 1.044, climbFactor: 0.985, flat0: 158.4499566856594, flat5: 206.70823216486284, climb0: -54.87077534791247, climb5: -28.667340220969145 },
    { name: "Pinarello Bolide TT", type: "tt", flatFactor: 1.044, climbFactor: 0.984, flat0: 158.28890054783477, flat5: 206.5471760270377, climb0: -57.256461232604316, climb5: -31.013916500994007 },
    { name: "QuintanaRoo Roo V-PR", type: "tt", flatFactor: 1.044, climbFactor: 0.988, flat0: 159.06489830280958, flat5: 206.86928830268747, climb0: -43.802757227129064, climb5: -17.75576051885439 },
    { name: "Scott Plasma", type: "tt", flatFactor: 1.044, climbFactor: 0.990, flat0: 159.5627081833595, flat5: 207.8795495308628, climb0: -35.00309617703654, climb5: -8.134797770752332 },
    { name: "Scott Plasma RC Ultimate", type: "tt", flatFactor: 1.050, climbFactor: 0.991, flat0: 176.6932246611107, flat5: 225.61036615868866, climb0: -32.734739106345664, climb5: -5.983769514063111 },
    { name: "Specialized Shiv", type: "tt", flatFactor: 1.044, climbFactor: 0.987, flat0: 158.93312509913488, flat5: 207.16211764418784, climb0: -45.21070299514412, climb5: -19.515692728873034 },
    { name: "Specialized Shiv Disc", type: "tt", flatFactor: 1.048, climbFactor: 0.988, flat0: 173.7063653778107, flat5: 222.8431288815137, climb0: -43.841866831796054, climb5: -17.833979728188368 },
    { name: "Specialized Shiv S-Works", type: "tt", flatFactor: 1.044, climbFactor: 0.991, flat0: 159.577349650435, flat5: 207.89419099793773, climb0: -33.829808037024115, climb5: -8.252126584753992 },
    { name: "Trek Speed Concept SLR 9", type: "tt", flatFactor: 1.048, climbFactor: 0.977, flat0: 173.36961163508542, flat5: 222.7845630132138, climb0: -81.34797770752542, climb5: -55.574748231920346 },
    { name: "Ventum One", type: "tt", flatFactor: 1.045, climbFactor: 0.980, flat0: 163.5891116289847, flat5: 195.14147317561202, climb0: -72.97852230877045, climb5: -37.467001271062365 },
    { name: "Zwift TT", type: "tt", flatFactor: 1.038, climbFactor: 0.982, flat0: 137.05877328908352, flat5: 184.37999487548646, climb0: -62.88824430466384, climb5: -36.76302838705449 },
    
    // Gravel Bikes
    { name: "Allied Able", type: "gravel", flatFactor: 0.962, climbFactor: 0.955, flat0: -136.67809514513388, flat5: -109.19606144535722, climb0: -139.50395984747254, climb5: -104.7746309031063 },
    { name: "Canyon Grail", type: "gravel", flatFactor: 0.965, climbFactor: 0.965, flat0: -126.66333166583316, flat5: -99.15201503190657, climb0: -125.58094058599205, climb5: -91.04715966496144 },
    { name: "Canyon Inflite", type: "gravel", flatFactor: 0.962, climbFactor: 0.956, flat0: -138.74254200270886, flat5: -111.12873509925699, climb0: -159.84095427435372, climb5: -125.85470781866167 },
    { name: "Cervelo Aspero", type: "gravel", flatFactor: 0.968, climbFactor: 0.961, flat0: -115.15513854488222, flat5: -87.2045778987056, climb0: -140.9119056154876, climb5: -106.61278232245894 },
    { name: "Giant Revolt Advanced Pro", type: "gravel", flatFactor: 0.964, climbFactor: 0.960, flat0: -129.48913481130853, flat5: -101.59714003343177, climb0: -146.34814066421148, climb5: -111.7752501385132 },
    { name: "Lauf True Grit", type: "gravel", flatFactor: 0.960, climbFactor: 0.947, flat0: -148.74266401493458, flat5: -121.30455471638282, climb0: -191.245966822019, climb5: -158.0028028550011 },
    { name: "Liv Devote Advanced Pro", type: "gravel", flatFactor: 0.964, climbFactor: 0.960, flat0: -129.34272014055833, flat5: -101.62642296758169, climb0: -146.15259264087584, climb5: -112.00990776651582 },
    { name: "Specialized Crux", type: "gravel", flatFactor: 0.966, climbFactor: 0.966, flat0: -121.5534596566578, flat5: -93.88108688490605, climb0: -123.07792588729923, climb5: -88.27037773359832 },
    { name: "Specialized Diverge", type: "gravel", flatFactor: 0.964, climbFactor: 0.957, flat0: -130.39690576995855, flat5: -102.70989153113183, climb0: -156.86862431965568, climb5: -123.70367956197245 },
    { name: "Zwift Gravel", type: "gravel", flatFactor: 0.960, climbFactor: 0.955, flat0: -145.40440952183434, flat5: -118.40554423553266, climb0: -162.93061304305343, climb5: -128.70970895935875 },
    
    // Mountain Bikes
    { name: "Canyon Lux", type: "mtb", flatFactor: 0.938, climbFactor: 0.897, flat0: -223.42878756451444, flat5: -200.09028904696277, climb0: -361.9593911938205, climb5: -311.7035491966237 },
    { name: "Scott Spark RC", type: "mtb", flatFactor: 0.937, climbFactor: 0.902, flat0: -226.84024939298953, flat5: -203.5163923425128, climb0: -351.9864420037156, climb5: -301.4959423785162 },
    { name: "Scott Spark RC World Cup", type: "mtb", flatFactor: 0.939, climbFactor: 0.905, flat0: -219.50487438841395, flat5: -196.28350760746255, climb0: -343.77342502362853, climb5: -292.3442948864194 },
    { name: "Specialized Epic S-Works", type: "mtb", flatFactor: 0.938, climbFactor: 0.901, flat0: -222.82848741443925, flat5: -199.4314230285877, climb0: -356.79692337776623, climb5: -305.7979988918946 },
    { name: "Trek Super Caliber", type: "mtb", flatFactor: 0.939, climbFactor: 0.904, flat0: -219.60736465793875, flat5: -196.18101733793725, climb0: -345.4942476289802, climb5: -293.75224065443444 },
    { name: "Zwift Mountain", type: "mtb", flatFactor: 0.937, climbFactor: 0.897, flat0: -226.4742127161143, flat5: -202.68182871923813, climb0: -371.5412443372556, climb5: -322.106704038067 },
    
    // Halo Bikes
    { name: "Cannondale R4000 Roller Blade", type: "TT", flatFactor: 1.034, climbFactor: 1.002, flat0: 120.73353750045705, flat5: 150.58748886638404, climb0: 6.922400026072915, climb5: 43.25522276178984 },
    { name: "Pinarello Espada", type: "TT", flatFactor: 1.065, climbFactor: 0.980, flat0: 231.7451408631143, flat5: 283.31238790126747, climb0: -71.68790535475706, climb5: -44.54583971580393 },
    { name: "Specialized PROJECT 74", type: "road", flatFactor: 1.035, climbFactor: 1.000, flat0: 124.42318720335751, flat5: 154.42355324003418, climb0: -0.3910960466705782, climb5: 36.176384317048274 },
    { name: "Zwift Concept Z1", type: "road", flatFactor: 1.032, climbFactor: 1.008, flat0: 114.23272611915671, flat5: 143.98418721555893, climb0: 29.99706677964953, climb5: 66.8383143760387 },
    
    // Funny Bikes
    { name: "Zwift Big Wheel", type: "funny", flatFactor: 1.000, climbFactor: 0.990, flat0: -2.1815785941752535, flat5: 25.124757500701275, climb0: -36.95857641039012, climb5: -1.7208226053516553 },
    { name: "Zwift BMX Bandit", type: "funny", flatFactor: 1.003, climbFactor: 0.935, flat0: 10.600422162300404, flat5: 38.74132188045212, climb0: -234.7358472118115, climb5: -201.76645047746317 },
    { name: "Zwift Buffalo Fahrrad", type: "funny", flatFactor: 0.986, climbFactor: 0.967, flat0: -51.64045437352855, flat5: -25.00762576410206, climb0: -117.64169083857536, climb5: -83.77277319688424 },
    
    // Handcycle
    { name: "Zwift Handcycle", type: "handcycle", flatFactor: 1.037, climbFactor: 0.884, flat0: 132.98844544223286, flat5: 165.4485779475102, climb0: -416.2044128670598, climb5: -386.6375517387478 }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bikeFrames; // For Node.js
} else {
    window.bikeFrames = bikeFrames; // For browser
}
