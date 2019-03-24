var caffeineInfo=[];
var json;
var caffeineMap = [
    {
        "10-hour-energy-shot": {
            "name": "10 Hour Energy Shot",
            "fl_oz": "1.93",
            "totalCaffeine": "422",
            "mg_per_oz": "218.7"
        },
        "1893-cola": {
            "name": "1893 Cola ",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "28-black-energy-drink": {
            "name": "28 Black Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "3-water": {
            "name": "3 Water",
            "fl_oz": "16.9",
            "totalCaffeine": "50",
            "mg_per_oz": "3.0"
        },
        "4-purpose-energy-drink": {
            "name": "4 Purpose Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "70",
            "mg_per_oz": "8.3"
        },
        "4c-energy-liquid-water-enhancers": {
            "name": "4C Energy Liquid Water Enhancers",
            "fl_oz": "8",
            "totalCaffeine": "60",
            "mg_per_oz": "7.5"
        },
        "4c-energy-rush": {
            "name": "4C Energy Rush",
            "fl_oz": "8",
            "totalCaffeine": "80",
            "mg_per_oz": "10.0"
        },
        "5-alarm-energy-shot": {
            "name": "5 Alarm Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "100",
            "mg_per_oz": "50.0"
        },
        "5-hour-energy": {
            "name": "5 Hour Energy",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "5-hour-energy-decaf": {
            "name": "5 Hour Energy Decaf",
            "fl_oz": "2",
            "totalCaffeine": "6",
            "mg_per_oz": "3.0"
        },
        "5-hour-energy-extra-strength": {
            "name": "5 Hour Energy Extra Strength",
            "fl_oz": "2",
            "totalCaffeine": "230",
            "mg_per_oz": "115.0"
        },
        "50-cal-energy-shot": {
            "name": "50 Cal Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "120",
            "mg_per_oz": "60.0"
        },
        "6-hour-power": {
            "name": "6 Hour Power",
            "fl_oz": "2.03",
            "totalCaffeine": "125",
            "mg_per_oz": "61.6"
        },
        "7-eleven-energy-shot": {
            "name": "7-Eleven Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "260",
            "mg_per_oz": "130.0"
        },
        "7-up": {
            "name": "7-Up",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "a&amp;w-cream-soda": {
            "name": "A&amp;W Cream Soda",
            "fl_oz": "12",
            "totalCaffeine": "29",
            "mg_per_oz": "2.4"
        },
        "a&w-root-beer": {
            "name": "A&W Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "abb-diet-turbo": {
            "name": "ABB Diet Turbo",
            "fl_oz": "18",
            "totalCaffeine": "90",
            "mg_per_oz": "5.0"
        },
        "ace-energy-drink": {
            "name": "Ace Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "active-brain-energy-shot": {
            "name": "Active Brain Energy Shot",
            "fl_oz": "0.75",
            "totalCaffeine": "68",
            "mg_per_oz": "90.7"
        },
        "acute-fruit-energy-drink": {
            "name": "Acute Fruit Energy Drink",
            "fl_oz": "15.5",
            "totalCaffeine": "213",
            "mg_per_oz": "13.7"
        },
        "advocare-slam-energy-shot": {
            "name": "Advocare Slam Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "120",
            "mg_per_oz": "60.0"
        },
        "advocare-slim": {
            "name": "Advocare Slim",
            "fl_oz": "8",
            "totalCaffeine": "120",
            "mg_per_oz": "15.0"
        },
        "afri-cola": {
            "name": "Afri Cola",
            "fl_oz": "12",
            "totalCaffeine": "89",
            "mg_per_oz": "7.4"
        },
        "ale-8-1": {
            "name": "Ale 8 1",
            "fl_oz": "12",
            "totalCaffeine": "37",
            "mg_per_oz": "3.1"
        },
        "allday-energy-shot": {
            "name": "AllDay Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "210",
            "mg_per_oz": "105.0"
        },
        "alri-hypershot": {
            "name": "ALRI Hypershot",
            "fl_oz": "2",
            "totalCaffeine": "500",
            "mg_per_oz": "250.0"
        },
        "alsa-energy-drink": {
            "name": "Alsa Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "americano-coffee": {
            "name": "Americano Coffee",
            "fl_oz": "12",
            "totalCaffeine": "154",
            "mg_per_oz": "12.8"
        },
        "ammo-energy-shot": {
            "name": "Ammo Energy Shot",
            "fl_oz": "1",
            "totalCaffeine": "171",
            "mg_per_oz": "171.0"
        },
        "amp-energy-cherry-blast": {
            "name": "Amp Energy Cherry Blast",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "amp-energy-drink": {
            "name": "Amp Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "142",
            "mg_per_oz": "8.9"
        },
        "amp-energy-zero": {
            "name": "Amp Energy Zero",
            "fl_oz": "16",
            "totalCaffeine": "157",
            "mg_per_oz": "9.8"
        },
        "amp-organic-energy-drink": {
            "name": "Amp Organic Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "amp-passion-fruit": {
            "name": "Amp Passion Fruit",
            "fl_oz": "16",
            "totalCaffeine": "156",
            "mg_per_oz": "9.8"
        },
        "amp-strawberry-limeade": {
            "name": "Amp Strawberry Limeade",
            "fl_oz": "16",
            "totalCaffeine": "156",
            "mg_per_oz": "9.8"
        },
        "aqua-enerviva": {
            "name": "Aqua Enerviva",
            "fl_oz": "20",
            "totalCaffeine": "100",
            "mg_per_oz": "5.0"
        },
        "arbonne-energy-fizz-stck": {
            "name": "Arbonne Energy Fizz Stck",
            "fl_oz": "8",
            "totalCaffeine": "50",
            "mg_per_oz": "6.2"
        },
        "arby's-jamocha-shake": {
            "name": "Arby's Jamocha Shake",
            "fl_oz": "16",
            "totalCaffeine": "12",
            "mg_per_oz": "0.7"
        },
        "archer-farms-energy-drink": {
            "name": "Archer Farms Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "arizona-arnold-palmer-half-and-half": {
            "name": "Arizona Arnold Palmer Half and Half",
            "fl_oz": "23",
            "totalCaffeine": "43",
            "mg_per_oz": "1.9"
        },
        "arizona-energy-drink-rx": {
            "name": "Arizona Energy Drink Rx",
            "fl_oz": "11.5",
            "totalCaffeine": "144",
            "mg_per_oz": "12.5"
        },
        "arizona-iced-tea": {
            "name": "Arizona Iced Tea",
            "fl_oz": "20",
            "totalCaffeine": "38",
            "mg_per_oz": "1.9"
        },
        "arizona-natural-energy": {
            "name": "Arizona Natural Energy",
            "fl_oz": "15.5",
            "totalCaffeine": "120",
            "mg_per_oz": "7.7"
        },
        "arma-energy-drink": {
            "name": "Arma Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "arriba-horchata-energy": {
            "name": "Arriba Horchata Energy",
            "fl_oz": "11",
            "totalCaffeine": "76",
            "mg_per_oz": "6.9"
        },
        "atomic-blast": {
            "name": "Atomic Blast",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "avitae-caffeinated-water": {
            "name": "Avitae Caffeinated Water",
            "fl_oz": "16.9",
            "totalCaffeine": "125",
            "mg_per_oz": "7.4"
        },
        "axio-energy-drink": {
            "name": "AXIO Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "az-energy-drink": {
            "name": "AZ Energy Drink",
            "fl_oz": "15",
            "totalCaffeine": "188",
            "mg_per_oz": "12.5"
        },
        "b-63-energy-drink": {
            "name": "B 63 Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "bai-antioxidant-infusion": {
            "name": "Bai Antioxidant Infusion",
            "fl_oz": "18",
            "totalCaffeine": "78",
            "mg_per_oz": "4.3"
        },
        "bang-energy-drink": {
            "name": "BANG Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "300",
            "mg_per_oz": "18.8"
        },
        "barista-bros-iced-coffee": {
            "name": "Barista Bros Iced Coffee",
            "fl_oz": "16.91",
            "totalCaffeine": "219",
            "mg_per_oz": "13.0"
        },
        "barq's-red-creme-soda": {
            "name": "Barq's Red Creme Soda",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "barq's-root-beer": {
            "name": "Barq's Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "22",
            "mg_per_oz": "1.8"
        },
        "baskin-robbins-cappuccino-blast": {
            "name": "Baskin Robbins Cappuccino Blast",
            "fl_oz": "24",
            "totalCaffeine": "234",
            "mg_per_oz": "9.8"
        },
        "battery-energy-drink": {
            "name": "Battery Energy Drink",
            "fl_oz": "11.2",
            "totalCaffeine": "106",
            "mg_per_oz": "9.5"
        },
        "battery-juiced-energy-drink": {
            "name": "Battery Juiced Energy Drink",
            "fl_oz": "15",
            "totalCaffeine": "144",
            "mg_per_oz": "9.6"
        },
        "bawls": {
            "name": "Bawls",
            "fl_oz": "10",
            "totalCaffeine": "64",
            "mg_per_oz": "6.4"
        },
        "bawls-cherry": {
            "name": "Bawls Cherry",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "bawls-exxtra": {
            "name": "Bawls Exxtra",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "bawls-orange": {
            "name": "Bawls Orange",
            "fl_oz": "10",
            "totalCaffeine": "64",
            "mg_per_oz": "6.4"
        },
        "bawls-root-beer": {
            "name": "Bawls Root Beer",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "bazi-energy-drink": {
            "name": "Bazi Energy Drink",
            "fl_oz": "2",
            "totalCaffeine": "80",
            "mg_per_oz": "40.0"
        },
        "bean-and-body-coffee": {
            "name": "Bean and Body Coffee",
            "fl_oz": "8",
            "totalCaffeine": "72",
            "mg_per_oz": "9.0"
        },
        "beaver-buzz-energy-drink": {
            "name": "Beaver Buzz Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "110",
            "mg_per_oz": "13.3"
        },
        "bee-energy-shot": {
            "name": "Bee Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "100",
            "mg_per_oz": "40.0"
        },
        "beebad-energy-drink": {
            "name": "BEEBAD Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "berocca": {
            "name": "Berocca",
            "fl_oz": "8",
            "totalCaffeine": "90",
            "mg_per_oz": "11.2"
        },
        "berzerk-energy-drink": {
            "name": "Berzerk Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "225",
            "mg_per_oz": "14.1"
        },
        "big-jak-energy-drink": {
            "name": "Big Jak Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "164",
            "mg_per_oz": "10.2"
        },
        "big-red-soda": {
            "name": "Big Red Soda",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "big-train-java-chip-ice-coffee": {
            "name": "Big Train Java Chip Ice Coffee",
            "fl_oz": "8",
            "totalCaffeine": "49",
            "mg_per_oz": "6.1"
        },
        "big-train-spiced-chai": {
            "name": "Big Train Spiced Chai",
            "fl_oz": "8",
            "totalCaffeine": "65",
            "mg_per_oz": "8.1"
        },
        "bigelow-tea": {
            "name": "Bigelow Tea",
            "fl_oz": "8",
            "totalCaffeine": "45",
            "mg_per_oz": "5.6"
        },
        "biggby-brewed-coffee": {
            "name": "Biggby Brewed Coffee",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "biggby-creamy-lattes": {
            "name": "Biggby Creamy Lattes",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "biggby-espresso": {
            "name": "Biggby Espresso",
            "fl_oz": "2",
            "totalCaffeine": "100",
            "mg_per_oz": "50.0"
        },
        "biggby-frozen-lattes": {
            "name": "Biggby Frozen Lattes",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "biggby-iced-coffee": {
            "name": "Biggby Iced Coffee",
            "fl_oz": "16",
            "totalCaffeine": "192",
            "mg_per_oz": "12.0"
        },
        "biggby-iced-tea": {
            "name": "Biggby Iced Tea",
            "fl_oz": "16",
            "totalCaffeine": "38",
            "mg_per_oz": "2.3"
        },
        "bing-energy-drink": {
            "name": "Bing Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "biohazard-coffee": {
            "name": "Biohazard Coffee",
            "fl_oz": "12",
            "totalCaffeine": "928",
            "mg_per_oz": "77.3"
        },
        "bizzy-cold-brew": {
            "name": "Bizzy Cold Brew",
            "fl_oz": "16",
            "totalCaffeine": "750",
            "mg_per_oz": "46.9"
        },
        "black-bruin-energy-drink": {
            "name": "Black Bruin Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "38",
            "mg_per_oz": "4.4"
        },
        "black-insomnia-coffee": {
            "name": "Black Insomnia Coffee",
            "fl_oz": "12",
            "totalCaffeine": "702",
            "mg_per_oz": "58.5"
        },
        "black-medicine-iced-coffee": {
            "name": "Black Medicine Iced Coffee",
            "fl_oz": "11",
            "totalCaffeine": "206",
            "mg_per_oz": "18.7"
        },
        "blade-energy-drink": {
            "name": "Blade Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "blink-energy-water": {
            "name": "Blink Energy Water",
            "fl_oz": "16.9",
            "totalCaffeine": "150",
            "mg_per_oz": "8.9"
        },
        "blood-energy-potion": {
            "name": "Blood Energy Potion",
            "fl_oz": "3.4",
            "totalCaffeine": "80",
            "mg_per_oz": "23.5"
        },
        "blu-energy-drinks": {
            "name": "BLU Energy Drinks",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "blu-frog-energy-drink": {
            "name": "Blu Frog Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "blue-bolt": {
            "name": "Blue Bolt",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "blue-charge": {
            "name": "Blue Charge",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "blue-energy-drink": {
            "name": "Blue Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "80",
            "mg_per_oz": "9.6"
        },
        "blutonium-energy-drink": {
            "name": "Blutonium Energy Drink",
            "fl_oz": "2",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "bomb-energy-drink": {
            "name": "Bomb Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "bomba-energy-drink": {
            "name": "Bomba Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "75",
            "mg_per_oz": "8.9"
        },
        "boost-energy-drink": {
            "name": "Boost Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "boost-nutritional-drink": {
            "name": "Boost Nutritional Drink",
            "fl_oz": "8",
            "totalCaffeine": "5",
            "mg_per_oz": "0.6"
        },
        "booty-sweat-energy-drink": {
            "name": "Booty Sweat Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "bottled-iced-coffee-dunkin-donuts": {
            "name": "Bottled Iced Coffee Dunkin Donuts",
            "fl_oz": "13.7",
            "totalCaffeine": "171",
            "mg_per_oz": "12.5"
        },
        "brain-toniq": {
            "name": "Brain TonIQ",
            "fl_oz": "8.4",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "brawndo-energy-drink": {
            "name": "Brawndo Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "brown-rice-tea": {
            "name": "Brown Rice Tea",
            "fl_oz": "8",
            "totalCaffeine": "4",
            "mg_per_oz": "0.5"
        },
        "bulldog-buzz": {
            "name": "Bulldog Buzz",
            "fl_oz": "11.84",
            "totalCaffeine": "204",
            "mg_per_oz": "17.2"
        },
        "bulletproof-coffee": {
            "name": "Bulletproof Coffee",
            "fl_oz": "8",
            "totalCaffeine": "145",
            "mg_per_oz": "18.1"
        },
        "burn-energy-drink": {
            "name": "Burn Energy Drink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "buzz-monkey": {
            "name": "Buzz Monkey",
            "fl_oz": "8.46",
            "totalCaffeine": "78",
            "mg_per_oz": "9.2"
        },
        "buzzwater": {
            "name": "BuzzWater",
            "fl_oz": "16.9",
            "totalCaffeine": "200",
            "mg_per_oz": "11.8"
        },
        "cafe-bustelo": {
            "name": "Cafe Bustelo",
            "fl_oz": "8",
            "totalCaffeine": "112",
            "mg_per_oz": "14.0"
        },
        "cafe-viva-probiotic-coffee": {
            "name": "Cafe Viva Probiotic Coffee",
            "fl_oz": "8",
            "totalCaffeine": "125",
            "mg_per_oz": "15.6"
        },
        "caffe-mocha": {
            "name": "Caffe Mocha",
            "fl_oz": "12",
            "totalCaffeine": "152",
            "mg_per_oz": "12.7"
        },
        "caffe-nero-coffee": {
            "name": "Caffe Nero Coffee",
            "fl_oz": "12",
            "totalCaffeine": "80",
            "mg_per_oz": "6.7"
        },
        "caffeinated-club-soda": {
            "name": "Caffeinated Club Soda",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "caffeine-energy-drink": {
            "name": "Caffeine Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "140",
            "mg_per_oz": "11.7"
        },
        "califia-farms-cold-brew-coffee": {
            "name": "Califia Farms Cold Brew Coffee",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "canada-dry-green-tea-ginger-ale": {
            "name": "Canada Dry Green Tea Ginger Ale",
            "fl_oz": "12",
            "totalCaffeine": "9",
            "mg_per_oz": "0.8"
        },
        "canadian-big-buzz-green-machine-energy": {
            "name": "Canadian Big Buzz Green Machine Energy",
            "fl_oz": "16",
            "totalCaffeine": "224",
            "mg_per_oz": "14.0"
        },
        "cannabis-energy-drink": {
            "name": "Cannabis Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "cappuccino": {
            "name": "Cappuccino",
            "fl_oz": "12",
            "totalCaffeine": "154",
            "mg_per_oz": "12.8"
        },
        "caribou-brewed-coffee": {
            "name": "Caribou Brewed Coffee",
            "fl_oz": "16",
            "totalCaffeine": "305",
            "mg_per_oz": "19.1"
        },
        "celsius-energy-drink": {
            "name": "Celsius Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "200",
            "mg_per_oz": "16.7"
        },
        "chai-tea": {
            "name": "Chai Tea",
            "fl_oz": "8",
            "totalCaffeine": "50",
            "mg_per_oz": "6.2"
        },
        "chameleon-cold-brew-coffee": {
            "name": "Chameleon Cold Brew Coffee",
            "fl_oz": "32",
            "totalCaffeine": "1013",
            "mg_per_oz": "31.7"
        },
        "chameleon-cold-brew-rtd-coffee": {
            "name": "Chameleon Cold Brew RTD Coffee",
            "fl_oz": "10",
            "totalCaffeine": "250",
            "mg_per_oz": "25.0"
        },
        "charge!-super-shot": {
            "name": "CHARGE! Super Shot",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "chasing-rabbits-energy-drink": {
            "name": "Chasing Rabbits Energy drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "cheerwine": {
            "name": "Cheerwine",
            "fl_oz": "12",
            "totalCaffeine": "48",
            "mg_per_oz": "4.0"
        },
        "cheetah-power-surge": {
            "name": "Cheetah Power Surge",
            "fl_oz": "24",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "cherry-coke": {
            "name": "Cherry Coke",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "cherry-coke-zero": {
            "name": "Cherry Coke Zero",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "chick-fil-a-iced-coffee": {
            "name": "Chick-fil-A Iced Coffee",
            "fl_oz": "14",
            "totalCaffeine": "94",
            "mg_per_oz": "6.7"
        },
        "chocolate-milk": {
            "name": "Chocolate Milk",
            "fl_oz": "8",
            "totalCaffeine": "5",
            "mg_per_oz": "0.6"
        },
        "choffy-(roasted-cacao)": {
            "name": "Choffy (roasted cacao)",
            "fl_oz": "6",
            "totalCaffeine": "23",
            "mg_per_oz": "3.8"
        },
        "cintron-energy-drink": {
            "name": "Cintron Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "170",
            "mg_per_oz": "10.6"
        },
        "clear-coffee": {
            "name": "Clear Coffee",
            "fl_oz": "6.77",
            "totalCaffeine": "100",
            "mg_per_oz": "14.8"
        },
        "clif-shot-turbo-energy-gel": {
            "name": "Clif Shot Turbo Energy Gel",
            "fl_oz": "1.2",
            "totalCaffeine": "100",
            "mg_per_oz": "83.3"
        },
        "club-mate": {
            "name": "Club Mate",
            "fl_oz": "16.91",
            "totalCaffeine": "100",
            "mg_per_oz": "5.9"
        },
        "co-operative-diet-cola": {
            "name": "Co-Operative Diet Cola",
            "fl_oz": "16.91",
            "totalCaffeine": "50",
            "mg_per_oz": "3.0"
        },
        "coca-cola-caffeine-free": {
            "name": "Coca-Cola caffeine free",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "coca-cola-classic": {
            "name": "Coca-Cola Classic",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "coca-cola-life": {
            "name": "Coca-Cola Life",
            "fl_oz": "12",
            "totalCaffeine": "28",
            "mg_per_oz": "2.3"
        },
        "cocaine-energy-drink": {
            "name": "Cocaine Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "280",
            "mg_per_oz": "33.3"
        },
        "cocaine-energy-shot": {
            "name": "Cocaine Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "280",
            "mg_per_oz": "140.0"
        },
        "coffee-(brewed)": {
            "name": "Coffee (Brewed)",
            "fl_oz": "8",
            "totalCaffeine": "163",
            "mg_per_oz": "20.4"
        },
        "coffee-(decaf,-brewed)": {
            "name": "Coffee (Decaf, Brewed)",
            "fl_oz": "8",
            "totalCaffeine": "6",
            "mg_per_oz": "0.7"
        },
        "coffee-(decaf,-instant)": {
            "name": "Coffee (Decaf, Instant)",
            "fl_oz": "8",
            "totalCaffeine": "3",
            "mg_per_oz": "0.3"
        },
        "coffee-(espresso)": {
            "name": "Coffee (Espresso)",
            "fl_oz": "1.5",
            "totalCaffeine": "77",
            "mg_per_oz": "51.3"
        },
        "coffee-(instant)": {
            "name": "Coffee (Instant)",
            "fl_oz": "8",
            "totalCaffeine": "57",
            "mg_per_oz": "7.1"
        },
        "coffee-bean-&-tea-leaf-coffee": {
            "name": "Coffee Bean & Tea leaf Coffee",
            "fl_oz": "16",
            "totalCaffeine": "333",
            "mg_per_oz": "20.8"
        },
        "coffee-crave-fearless-black": {
            "name": "Coffee Crave Fearless Black",
            "fl_oz": "12",
            "totalCaffeine": "844",
            "mg_per_oz": "70.3"
        },
        "coffee-leaf-tea": {
            "name": "Coffee Leaf Tea",
            "fl_oz": "8",
            "totalCaffeine": "12",
            "mg_per_oz": "1.5"
        },
        "cojones-energy-shot": {
            "name": "Cojones Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "125",
            "mg_per_oz": "62.5"
        },
        "coke-zero-sugar": {
            "name": "Coke Zero Sugar",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "comotion": {
            "name": "CoMotion",
            "fl_oz": "8.4",
            "totalCaffeine": "160",
            "mg_per_oz": "19.0"
        },
        "coolbrew-coffee": {
            "name": "CoolBrew Coffee",
            "fl_oz": "10",
            "totalCaffeine": "60",
            "mg_per_oz": "6.0"
        },
        "costa-coffee": {
            "name": "Costa Coffee",
            "fl_oz": "15.22",
            "totalCaffeine": "277",
            "mg_per_oz": "18.2"
        },
        "cougar-energy-double-shot": {
            "name": "Cougar Energy Double Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "150",
            "mg_per_oz": "60.0"
        },
        "courage-energy-drink": {
            "name": "Courage Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "50",
            "mg_per_oz": "5.9"
        },
        "cran-energy-juice": {
            "name": "Cran Energy Juice",
            "fl_oz": "10",
            "totalCaffeine": "69",
            "mg_per_oz": "6.9"
        },
        "crave-energy-drink": {
            "name": "Crave Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "crunk-energy-drink": {
            "name": "Crunk Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "192",
            "mg_per_oz": "12.0"
        },
        "crystal-light-energy": {
            "name": "Crystal Light Energy",
            "fl_oz": "16",
            "totalCaffeine": "60",
            "mg_per_oz": "3.8"
        },
        "crystal-light-focus": {
            "name": "Crystal Light Focus",
            "fl_oz": "16",
            "totalCaffeine": "40",
            "mg_per_oz": "2.5"
        },
        "crystal-light-iced-tea": {
            "name": "Crystal Light Iced Tea",
            "fl_oz": "8",
            "totalCaffeine": "11",
            "mg_per_oz": "1.4"
        },
        "crystal-pepsi": {
            "name": "Crystal Pepsi",
            "fl_oz": "20",
            "totalCaffeine": "63",
            "mg_per_oz": "3.1"
        },
        "cult-cola": {
            "name": "Cult Cola",
            "fl_oz": "16.91",
            "totalCaffeine": "75",
            "mg_per_oz": "4.4"
        },
        "cyborg": {
            "name": "Cyborg",
            "fl_oz": "8.43",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "dare-iced-coffee": {
            "name": "Dare Iced Coffee",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "dark-dog-energy-drink": {
            "name": "Dark Dog Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "death-wish-coffee": {
            "name": "Death Wish Coffee",
            "fl_oz": "12",
            "totalCaffeine": "728",
            "mg_per_oz": "60.7"
        },
        "death-wish-nitro-brew": {
            "name": "Death Wish Nitro Brew",
            "fl_oz": "11",
            "totalCaffeine": "381",
            "mg_per_oz": "34.6"
        },
        "demon-energy-drink": {
            "name": "Demon Energy Drink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "demon-energy-shot": {
            "name": "Demon Energy Shot",
            "fl_oz": "2.03",
            "totalCaffeine": "200",
            "mg_per_oz": "98.5"
        },
        "diablo-energy-drink": {
            "name": "Diablo Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "95",
            "mg_per_oz": "11.3"
        },
        "diabolo-loco-energy-drink": {
            "name": "Diabolo Loco Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "diet-a&amp;w-cream-soda": {
            "name": "Diet A&amp;W Cream Soda",
            "fl_oz": "12",
            "totalCaffeine": "22",
            "mg_per_oz": "1.8"
        },
        "diet-barq's-root-beer": {
            "name": "Diet Barq's Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "diet-cheerwine": {
            "name": "Diet Cheerwine",
            "fl_oz": "12",
            "totalCaffeine": "48",
            "mg_per_oz": "4.0"
        },
        "diet-cherry-coca-cola": {
            "name": "Diet Cherry Coca-Cola",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "diet-coke": {
            "name": "Diet Coke",
            "fl_oz": "12",
            "totalCaffeine": "46",
            "mg_per_oz": "3.8"
        },
        "diet-coke-plus": {
            "name": "Diet Coke Plus",
            "fl_oz": "12",
            "totalCaffeine": "45",
            "mg_per_oz": "3.8"
        },
        "diet-coke-with-lemon": {
            "name": "Diet Coke with Lemon",
            "fl_oz": "12",
            "totalCaffeine": "45",
            "mg_per_oz": "3.8"
        },
        "diet-coke-with-lime": {
            "name": "Diet Coke with Lime",
            "fl_oz": "12",
            "totalCaffeine": "46",
            "mg_per_oz": "3.8"
        },
        "diet-coke-with-splenda": {
            "name": "Diet Coke with Splenda",
            "fl_oz": "12",
            "totalCaffeine": "46",
            "mg_per_oz": "3.8"
        },
        "diet-dr-pepper": {
            "name": "Diet Dr Pepper",
            "fl_oz": "12",
            "totalCaffeine": "41",
            "mg_per_oz": "3.4"
        },
        "diet-dr-pepper-cherry": {
            "name": "Diet Dr Pepper Cherry",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "diet-dr-pepper-cherry-vanilla": {
            "name": "Diet Dr Pepper Cherry Vanilla",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "diet-mountain-dew": {
            "name": "Diet Mountain Dew",
            "fl_oz": "12",
            "totalCaffeine": "54",
            "mg_per_oz": "4.5"
        },
        "diet-mr.-pibb": {
            "name": "Diet Mr. Pibb",
            "fl_oz": "12",
            "totalCaffeine": "40",
            "mg_per_oz": "3.3"
        },
        "diet-pepsi": {
            "name": "Diet Pepsi",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "diet-pepsi-uk,-au,-nz": {
            "name": "Diet Pepsi UK, AU, NZ",
            "fl_oz": "12.01",
            "totalCaffeine": "43",
            "mg_per_oz": "3.5"
        },
        "diet-rc-cola": {
            "name": "Diet RC Cola",
            "fl_oz": "12",
            "totalCaffeine": "47",
            "mg_per_oz": "3.9"
        },
        "diet-ruby-red-squirt": {
            "name": "Diet Ruby Red Squirt",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "diet-sunkist-orange-soda": {
            "name": "Diet Sunkist Orange Soda",
            "fl_oz": "12",
            "totalCaffeine": "42",
            "mg_per_oz": "3.5"
        },
        "diet-turbo-tea": {
            "name": "Diet Turbo Tea",
            "fl_oz": "18",
            "totalCaffeine": "90",
            "mg_per_oz": "5.0"
        },
        "diet-vanilla-coke": {
            "name": "Diet Vanilla Coke",
            "fl_oz": "12",
            "totalCaffeine": "45",
            "mg_per_oz": "3.8"
        },
        "diet-wild-cherry-pepsi": {
            "name": "Diet Wild Cherry Pepsi",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "divas-energy-drink": {
            "name": "Divas Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "dna-energy-drink": {
            "name": "DNA Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "170",
            "mg_per_oz": "10.6"
        },
        "doc": {
            "name": "doc",
            "fl_oz": "20",
            "totalCaffeine": "100",
            "mg_per_oz": "5.0"
        },
        "dollar-energy-shot": {
            "name": "Dollar Energy Shot",
            "fl_oz": "1.93",
            "totalCaffeine": "190",
            "mg_per_oz": "98.4"
        },
        "don-tomas-estate-coffee": {
            "name": "Don Tomas Estate Coffee",
            "fl_oz": "8",
            "totalCaffeine": "145",
            "mg_per_oz": "18.1"
        },
        "double-cola": {
            "name": "Double Cola",
            "fl_oz": "12",
            "totalCaffeine": "36",
            "mg_per_oz": "3.0"
        },
        "dr-pepper": {
            "name": "Dr Pepper",
            "fl_oz": "12",
            "totalCaffeine": "41",
            "mg_per_oz": "3.4"
        },
        "dr-pepper-10": {
            "name": "Dr Pepper 10",
            "fl_oz": "12",
            "totalCaffeine": "51",
            "mg_per_oz": "4.2"
        },
        "dr-pepper-cherry": {
            "name": "Dr Pepper Cherry",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "dr-pepper-cherry-vanilla": {
            "name": "Dr Pepper Cherry Vanilla",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "dragon-pearl": {
            "name": "Dragon Pearl",
            "fl_oz": "2",
            "totalCaffeine": "100",
            "mg_per_oz": "50.0"
        },
        "duff-energy-drink": {
            "name": "Duff Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "dunkin'-donuts-brewed-coffee": {
            "name": "Dunkin' Donuts Brewed Coffee",
            "fl_oz": "14",
            "totalCaffeine": "210",
            "mg_per_oz": "15.0"
        },
        "dunkin'-donuts-coolatta": {
            "name": "Dunkin' Donuts Coolatta",
            "fl_oz": "24",
            "totalCaffeine": "18",
            "mg_per_oz": "0.8"
        },
        "dunkin'-donuts-dunkaccino": {
            "name": "Dunkin' Donuts Dunkaccino",
            "fl_oz": "14",
            "totalCaffeine": "83",
            "mg_per_oz": "5.9"
        },
        "dunkin'-donuts-iced-coffee": {
            "name": "Dunkin' Donuts Iced Coffee",
            "fl_oz": "24",
            "totalCaffeine": "297",
            "mg_per_oz": "12.4"
        },
        "dunkin'-donuts-iced-latte": {
            "name": "Dunkin' Donuts Iced Latte",
            "fl_oz": "24",
            "totalCaffeine": "151",
            "mg_per_oz": "6.3"
        },
        "dunkin'-donuts-iced-tea": {
            "name": "Dunkin' Donuts Iced Tea",
            "fl_oz": "24",
            "totalCaffeine": "67",
            "mg_per_oz": "2.8"
        },
        "dunkin'-donuts-latte": {
            "name": "Dunkin' Donuts Latte",
            "fl_oz": "14",
            "totalCaffeine": "151",
            "mg_per_oz": "10.8"
        },
        "dunkin'-donuts-mocha": {
            "name": "Dunkin' Donuts Mocha",
            "fl_oz": "14",
            "totalCaffeine": "151",
            "mg_per_oz": "10.8"
        },
        "dutch-bros.-blue-rebel-energy-drink": {
            "name": "Dutch Bros. Blue Rebel Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "dutch-bros.-coffee": {
            "name": "Dutch Bros. Coffee",
            "fl_oz": "20",
            "totalCaffeine": "256",
            "mg_per_oz": "12.8"
        },
        "dynapep": {
            "name": "DynaPep",
            "fl_oz": "0.14",
            "totalCaffeine": "100",
            "mg_per_oz": "714.3"
        },
        "e6-energy-shot": {
            "name": "E6 Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "235",
            "mg_per_oz": "117.5"
        },
        "eboost-energy-drink": {
            "name": "Eboost Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "80",
            "mg_per_oz": "10.0"
        },
        "ed-energy-drink": {
            "name": "ED Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "eight-o'clock-coffee": {
            "name": "Eight O'Clock Coffee",
            "fl_oz": "8",
            "totalCaffeine": "112",
            "mg_per_oz": "14.0"
        },
        "einstein-bros-coffee": {
            "name": "Einstein Bros Coffee",
            "fl_oz": "16",
            "totalCaffeine": "206",
            "mg_per_oz": "12.9"
        },
        "electric-monkey-wild-energy-drink": {
            "name": "Electric Monkey Wild Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "element-caffeinated-water": {
            "name": "Element Caffeinated Water",
            "fl_oz": "16.9",
            "totalCaffeine": "50",
            "mg_per_oz": "3.0"
        },
        "emerge": {
            "name": "Emerge",
            "fl_oz": "8.46",
            "totalCaffeine": "75",
            "mg_per_oz": "8.9"
        },
        "emv-energy-drink": {
            "name": "EMV Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "enerbee-energy-drink": {
            "name": "EnerBee Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "energi-zing-shake-by-nutrisystem": {
            "name": "Energi-ZING Shake by Nutrisystem",
            "fl_oz": "8",
            "totalCaffeine": "200",
            "mg_per_oz": "25.0"
        },
        "energy-catalyst": {
            "name": "Energy Catalyst",
            "fl_oz": "0.23",
            "totalCaffeine": "100",
            "mg_per_oz": "434.8"
        },
        "enerji-green-tea-energy-shot": {
            "name": "Enerji Green Tea Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "100",
            "mg_per_oz": "40.0"
        },
        "enorm-energy-drink": {
            "name": "Enorm Energy Drink",
            "fl_oz": "8.45",
            "totalCaffeine": "88",
            "mg_per_oz": "10.4"
        },
        "epiphany-energy-drink": {
            "name": "Epiphany Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "80",
            "mg_per_oz": "10.0"
        },
        "eruption-effervescent-energy": {
            "name": "Eruption Effervescent Energy",
            "fl_oz": "8",
            "totalCaffeine": "45",
            "mg_per_oz": "5.6"
        },
        "eternal-energy-shot": {
            "name": "Eternal Energy Shot",
            "fl_oz": "1.93",
            "totalCaffeine": "222",
            "mg_per_oz": "115.0"
        },
        "everyday-energy-shot": {
            "name": "Everyday Energy Shot",
            "fl_oz": "8",
            "totalCaffeine": "75",
            "mg_per_oz": "9.4"
        },
        "ex-energy-drink": {
            "name": "Ex Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "79",
            "mg_per_oz": "9.3"
        },
        "extra-water-energy-drink": {
            "name": "Extra Water Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "extreme-thermo-rush": {
            "name": "Extreme Thermo Rush",
            "fl_oz": "20",
            "totalCaffeine": "200",
            "mg_per_oz": "10.0"
        },
        "fab-energy-drink": {
            "name": "FAB Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "70",
            "mg_per_oz": "8.3"
        },
        "facedrink-energy-shot": {
            "name": "Facedrink Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "140",
            "mg_per_oz": "56.0"
        },
        "fakeer-energy-drink": {
            "name": "Fakeer Energy Drink",
            "fl_oz": "12.52",
            "totalCaffeine": "118",
            "mg_per_oz": "9.4"
        },
        "fanta": {
            "name": "Fanta",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "fast-lane-black-tea": {
            "name": "Fast Lane Black Tea",
            "fl_oz": "8",
            "totalCaffeine": "110",
            "mg_per_oz": "13.8"
        },
        "faygo-cola": {
            "name": "Faygo Cola",
            "fl_oz": "12",
            "totalCaffeine": "42",
            "mg_per_oz": "3.5"
        },
        "faygo-moon-mist": {
            "name": "Faygo Moon Mist",
            "fl_oz": "12",
            "totalCaffeine": "20",
            "mg_per_oz": "1.6"
        },
        "fein-energy-crystals": {
            "name": "Fein Energy Crystals",
            "fl_oz": "8",
            "totalCaffeine": "75",
            "mg_per_oz": "9.4"
        },
        "fighter-energy-drink": {
            "name": "Fighter Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "38",
            "mg_per_oz": "4.7"
        },
        "fire-blade-energy-drink": {
            "name": "Fire Blade Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "flat-white": {
            "name": "Flat White",
            "fl_oz": "8.46",
            "totalCaffeine": "77",
            "mg_per_oz": "9.1"
        },
        "flatt-cola": {
            "name": "Flatt Cola",
            "fl_oz": "8",
            "totalCaffeine": "65",
            "mg_per_oz": "8.1"
        },
        "flying-power-energy-drink": {
            "name": "Flying Power Energy Drink",
            "fl_oz": "11.15",
            "totalCaffeine": "106",
            "mg_per_oz": "9.5"
        },
        "fmf-power-energy-drink": {
            "name": "FMF Power Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "folgers-coffee": {
            "name": "Folgers Coffee",
            "fl_oz": "8",
            "totalCaffeine": "112",
            "mg_per_oz": "14.0"
        },
        "forto-coffee-energy-shot": {
            "name": "Forto Coffee Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "frava-caffeinated-juice": {
            "name": "Frava Caffeinated Juice",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "fresca": {
            "name": "Fresca",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "freshe-energy-drink": {
            "name": "Freshe Energy Drink",
            "fl_oz": "9.3",
            "totalCaffeine": "80",
            "mg_per_oz": "8.6"
        },
        "fritz-kola": {
            "name": "Fritz Kola",
            "fl_oz": "11.16",
            "totalCaffeine": "83",
            "mg_per_oz": "7.4"
        },
        "frs-energy-drink": {
            "name": "FRS Energy Drink",
            "fl_oz": "11",
            "totalCaffeine": "38",
            "mg_per_oz": "3.5"
        },
        "fuel-cell": {
            "name": "Fuel Cell",
            "fl_oz": "2",
            "totalCaffeine": "180",
            "mg_per_oz": "90.0"
        },
        "fuel-energy-drink": {
            "name": "Fuel Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "full-throttle-energy-drink": {
            "name": "Full Throttle Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "full-throttle-frozen-blast": {
            "name": "Full Throttle Frozen Blast",
            "fl_oz": "8",
            "totalCaffeine": "27",
            "mg_per_oz": "3.4"
        },
        "function-alternative-energy": {
            "name": "Function Alternative Energy",
            "fl_oz": "16.9",
            "totalCaffeine": "70",
            "mg_per_oz": "4.1"
        },
        "fuze-iced-tea": {
            "name": "Fuze Iced Tea",
            "fl_oz": "20",
            "totalCaffeine": "20",
            "mg_per_oz": "1.0"
        },
        "g-fuel-energy-drink-mix": {
            "name": "G Fuel Energy Drink Mix",
            "fl_oz": "12",
            "totalCaffeine": "150",
            "mg_per_oz": "12.5"
        },
        "g-pure-energy-drink": {
            "name": "G Pure Energy Drink",
            "fl_oz": "6.76",
            "totalCaffeine": "80",
            "mg_per_oz": "11.8"
        },
        "g-shot-antioxidant-energy": {
            "name": "G Shot Antioxidant Energy",
            "fl_oz": "2.4",
            "totalCaffeine": "80",
            "mg_per_oz": "33.3"
        },
        "gaga-energy-drink": {
            "name": "GaGa Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "game-juice": {
            "name": "Game Juice",
            "fl_oz": "16.9",
            "totalCaffeine": "38",
            "mg_per_oz": "2.2"
        },
        "ginger-ale-or-ginger-beer": {
            "name": "Ginger Ale or Ginger Beer",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "gloria-jean's-coffee": {
            "name": "Gloria Jean's Coffee",
            "fl_oz": "2.028",
            "totalCaffeine": "67",
            "mg_per_oz": "33.0"
        },
        "go-fast-energy-drink": {
            "name": "Go Fast Energy Drink",
            "fl_oz": "11.9",
            "totalCaffeine": "120",
            "mg_per_oz": "10.1"
        },
        "go-fast!-coconut": {
            "name": "Go Fast! Coconut",
            "fl_oz": "16",
            "totalCaffeine": "162",
            "mg_per_oz": "10.1"
        },
        "go-girl-energy-drink": {
            "name": "Go Girl Energy Drink",
            "fl_oz": "11.5",
            "totalCaffeine": "100",
            "mg_per_oz": "8.7"
        },
        "go-loco--loco-tonic": {
            "name": "Go Loco- Loco Tonic",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "golazo-sports-energy-drink": {
            "name": "Golazo Sports Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "gold-peak-coffee": {
            "name": "Gold Peak Coffee",
            "fl_oz": "8",
            "totalCaffeine": "126",
            "mg_per_oz": "15.8"
        },
        "gold-peak-tea": {
            "name": "Gold Peak Tea",
            "fl_oz": "18.5",
            "totalCaffeine": "27",
            "mg_per_oz": "1.5"
        },
        "gourmesso-coffee-pods": {
            "name": "Gourmesso Coffee Pods",
            "fl_oz": "1.35",
            "totalCaffeine": "65",
            "mg_per_oz": "48.1"
        },
        "grazzhopper-energy-drink": {
            "name": "Grazzhopper Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "63",
            "mg_per_oz": "7.4"
        },
        "great-value-energy-drink-enhancers": {
            "name": "Great Value Energy Drink Enhancers",
            "fl_oz": "8",
            "totalCaffeine": "50",
            "mg_per_oz": "6.2"
        },
        "great-value-energy-drink-mix": {
            "name": "Great Value Energy Drink Mix",
            "fl_oz": "16",
            "totalCaffeine": "120",
            "mg_per_oz": "7.5"
        },
        "greek-coffee-(metrios)": {
            "name": "Greek Coffee (Metrios)",
            "fl_oz": "2",
            "totalCaffeine": "50",
            "mg_per_oz": "25.0"
        },
        "green-energy-drink": {
            "name": "Green Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "150",
            "mg_per_oz": "17.7"
        },
        "green-go": {
            "name": "Green Go",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "gridlock-energy-drink": {
            "name": "Gridlock Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "guayaki-canned-yerba-mate": {
            "name": "Guayaki Canned Yerba Mate",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "guayaki-energy-shots": {
            "name": "Guayaki Energy Shots",
            "fl_oz": "2",
            "totalCaffeine": "140",
            "mg_per_oz": "70.0"
        },
        "guayaki-yerba-mate-bottled-tea": {
            "name": "Guayaki Yerba Mate Bottled Tea",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "guayusa-tea": {
            "name": "Guayusa Tea",
            "fl_oz": "8",
            "totalCaffeine": "66",
            "mg_per_oz": "8.2"
        },
        "guru-energy-drink": {
            "name": "GURU Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "140",
            "mg_per_oz": "11.7"
        },
        "guru-sparkling-energy-water": {
            "name": "GURU Sparkling Energy Water",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "hansen's-diet-red": {
            "name": "Hansen's Diet Red",
            "fl_oz": "8.3",
            "totalCaffeine": "57",
            "mg_per_oz": "6.9"
        },
        "hansen's-energy-pro": {
            "name": "Hansen's Energy Pro",
            "fl_oz": "8.3",
            "totalCaffeine": "57",
            "mg_per_oz": "6.9"
        },
        "hard-rock-energy-drink": {
            "name": "Hard Rock Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "hardcore-energize-bullet": {
            "name": "Hardcore Energize Bullet",
            "fl_oz": "2.9",
            "totalCaffeine": "300",
            "mg_per_oz": "103.4"
        },
        "havoc-energy-drink": {
            "name": "Havoc Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "52",
            "mg_per_oz": "6.2"
        },
        "hawaiian-ola-noni-energy-shot": {
            "name": "Hawaiian OLA Noni Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "150",
            "mg_per_oz": "60.0"
        },
        "hawaiian-ola-sparkling-energy": {
            "name": "Hawaiian Ola Sparkling Energy",
            "fl_oz": "11.5",
            "totalCaffeine": "150",
            "mg_per_oz": "13.0"
        },
        "health-energy-potion": {
            "name": "Health Energy Potion",
            "fl_oz": "2",
            "totalCaffeine": "160",
            "mg_per_oz": "80.0"
        },
        "heka-energy-drink": {
            "name": "Heka Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "helix-energy-drink": {
            "name": "Helix Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "170",
            "mg_per_oz": "10.6"
        },
        "heroec-energy-water": {
            "name": "Heroec Energy Water",
            "fl_oz": "16.9",
            "totalCaffeine": "60",
            "mg_per_oz": "3.6"
        },
        "hershey's-chocolate-milk": {
            "name": "Hershey's Chocolate Milk",
            "fl_oz": "8",
            "totalCaffeine": "5",
            "mg_per_oz": "0.6"
        },
        "hi-ball-energy-coffee": {
            "name": "Hi Ball Energy Coffee",
            "fl_oz": "8",
            "totalCaffeine": "120",
            "mg_per_oz": "15.0"
        },
        "hi-ball-energy-drink": {
            "name": "Hi Ball Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "hi-ball-protein-energy-shake": {
            "name": "Hi Ball Protein Energy Shake",
            "fl_oz": "11",
            "totalCaffeine": "100",
            "mg_per_oz": "9.1"
        },
        "hicaf-tea": {
            "name": "HICAF Tea",
            "fl_oz": "8",
            "totalCaffeine": "110",
            "mg_per_oz": "13.8"
        },
        "high-brew-coffee": {
            "name": "High Brew Coffee",
            "fl_oz": "8",
            "totalCaffeine": "163",
            "mg_per_oz": "20.4"
        },
        "hijinks-energy-mixer": {
            "name": "Hijinks Energy Mixer",
            "fl_oz": "1.1",
            "totalCaffeine": "200",
            "mg_per_oz": "181.8"
        },
        "hint-caffeine-kick-water": {
            "name": "Hint Caffeine Kick Water",
            "fl_oz": "16",
            "totalCaffeine": "60",
            "mg_per_oz": "3.8"
        },
        "honest-professor-fizz": {
            "name": "Honest Professor Fizz",
            "fl_oz": "12",
            "totalCaffeine": "40",
            "mg_per_oz": "3.3"
        },
        "honest-tea": {
            "name": "Honest Tea",
            "fl_oz": "16.9",
            "totalCaffeine": "90",
            "mg_per_oz": "5.3"
        },
        "hot-cocoa-(hot-chocolate)": {
            "name": "Hot Cocoa (Hot Chocolate)",
            "fl_oz": "8",
            "totalCaffeine": "5",
            "mg_per_oz": "0.6"
        },
        "hot-pure-energy-drink": {
            "name": "Hot Pure Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "howling-monkey-energy-drink": {
            "name": "Howling Monkey Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "hydrive-energy-water": {
            "name": "Hydrive Energy Water",
            "fl_oz": "15.5",
            "totalCaffeine": "160",
            "mg_per_oz": "10.3"
        },
        "hydrive-extra-power": {
            "name": "Hydrive Extra Power",
            "fl_oz": "15.5",
            "totalCaffeine": "195",
            "mg_per_oz": "12.6"
        },
        "hydroxycut-instant-shot": {
            "name": "Hydroxycut Instant Shot",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "hype-energy-drink": {
            "name": "Hype Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "ibc-root-beer": {
            "name": "IBC Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "illy-issimo-cafe": {
            "name": "Illy Issimo Cafe",
            "fl_oz": "6.8",
            "totalCaffeine": "155",
            "mg_per_oz": "22.8"
        },
        "inca-kola": {
            "name": "Inca Kola",
            "fl_oz": "16",
            "totalCaffeine": "50",
            "mg_per_oz": "3.1"
        },
        "indigo-energy-drink": {
            "name": "Indigo Energy Drink",
            "fl_oz": "12.68",
            "totalCaffeine": "94",
            "mg_per_oz": "7.4"
        },
        "indulgio-cappuccino": {
            "name": "Indulgio Cappuccino",
            "fl_oz": "8",
            "totalCaffeine": "20",
            "mg_per_oz": "2.5"
        },
        "ink": {
            "name": "Ink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "inko's-white-tea-energy": {
            "name": "Inko's White Tea Energy",
            "fl_oz": "15.5",
            "totalCaffeine": "184",
            "mg_per_oz": "11.9"
        },
        "international-delight-iced-coffee": {
            "name": "International Delight Iced Coffee",
            "fl_oz": "8",
            "totalCaffeine": "65",
            "mg_per_oz": "8.1"
        },
        "irn-bru-32": {
            "name": "Irn Bru 32",
            "fl_oz": "11.16",
            "totalCaffeine": "106",
            "mg_per_oz": "9.5"
        },
        "ishot-energy-shot": {
            "name": "iShot Energy Shot",
            "fl_oz": "2.03",
            "totalCaffeine": "120",
            "mg_per_oz": "59.1"
        },
        "ishot-love-potion": {
            "name": "iShot Love Potion",
            "fl_oz": "2.03",
            "totalCaffeine": "90",
            "mg_per_oz": "44.3"
        },
        "ishot-skinny-energy-shot": {
            "name": "iShot Skinny Energy Shot",
            "fl_oz": "2.03",
            "totalCaffeine": "78",
            "mg_per_oz": "38.4"
        },
        "jamba-juice-energy-drink": {
            "name": "Jamba Juice Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "java-kick-energy-drink": {
            "name": "Java Kick Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "84",
            "mg_per_oz": "9.9"
        },
        "java-monster": {
            "name": "Java Monster",
            "fl_oz": "15",
            "totalCaffeine": "188",
            "mg_per_oz": "12.5"
        },
        "jazz-caramel-cream": {
            "name": "Jazz Caramel Cream",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "joker-mad-energy": {
            "name": "Joker Mad Energy",
            "fl_oz": "16",
            "totalCaffeine": "206",
            "mg_per_oz": "12.9"
        },
        "jolt-cola": {
            "name": "Jolt Cola",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "jolt-endurance-shot": {
            "name": "Jolt Endurance Shot",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "jump-start-energy-drink": {
            "name": "Jump Start Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "k-cup-tea": {
            "name": "K Cup Tea",
            "fl_oz": "8",
            "totalCaffeine": "41",
            "mg_per_oz": "5.1"
        },
        "k-cup-coffee": {
            "name": "K-Cup Coffee",
            "fl_oz": "8",
            "totalCaffeine": "120",
            "mg_per_oz": "15.0"
        },
        "kaffn8-liquified-caffeine": {
            "name": "Kaffn8 Liquified Caffeine",
            "fl_oz": "0.25",
            "totalCaffeine": "75",
            "mg_per_oz": "300.0"
        },
        "karvana-kombucha-energy-shot": {
            "name": "Karvana Kombucha Energy Shot",
            "fl_oz": "4.5",
            "totalCaffeine": "110",
            "mg_per_oz": "24.4"
        },
        "keurig-vue-pack": {
            "name": "Keurig Vue Pack",
            "fl_oz": "12",
            "totalCaffeine": "180",
            "mg_per_oz": "15.0"
        },
        "kick-energy-drink": {
            "name": "Kick Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "kickapoo-soda:-joy-juice-&-fruit-shine": {
            "name": "Kickapoo Soda: Joy Juice & Fruit Shine",
            "fl_oz": "12",
            "totalCaffeine": "40",
            "mg_per_oz": "3.3"
        },
        "kill-cliff-recovery-drink": {
            "name": "Kill Cliff Recovery Drink",
            "fl_oz": "12",
            "totalCaffeine": "25",
            "mg_per_oz": "2.1"
        },
        "killer-buzz": {
            "name": "Killer Buzz",
            "fl_oz": "8.3",
            "totalCaffeine": "100",
            "mg_per_oz": "12.0"
        },
        "killer-coffee": {
            "name": "Killer Coffee",
            "fl_oz": "8.46",
            "totalCaffeine": "430",
            "mg_per_oz": "50.8"
        },
        "king-888-energy-drink": {
            "name": "King 888 Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "kinley-soda": {
            "name": "Kinley Soda",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "kirkland-energy-shot": {
            "name": "Kirkland Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "180",
            "mg_per_oz": "90.0"
        },
        "knockout-energy-drink": {
            "name": "Knockout Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "kombucha-extreme-energy-shot": {
            "name": "Kombucha Extreme Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "150",
            "mg_per_oz": "75.0"
        },
        "kombucha-tea": {
            "name": "Kombucha Tea",
            "fl_oz": "8",
            "totalCaffeine": "24",
            "mg_per_oz": "3.0"
        },
        "kona-gold-energy-drink": {
            "name": "Kona Gold Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "kona-red": {
            "name": "Kona Red",
            "fl_oz": "16",
            "totalCaffeine": "54",
            "mg_per_oz": "3.4"
        },
        "kx-energy-drink": {
            "name": "KX Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "latte": {
            "name": "Latte",
            "fl_oz": "16",
            "totalCaffeine": "154",
            "mg_per_oz": "9.6"
        },
        "life-blast-xtreme-energy": {
            "name": "Life Blast Xtreme Energy",
            "fl_oz": "8",
            "totalCaffeine": "100",
            "mg_per_oz": "12.5"
        },
        "lift-off-energy-drink": {
            "name": "Lift Off Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "72",
            "mg_per_oz": "9.0"
        },
        "lift-plus-energy-drink": {
            "name": "Lift Plus Energy Drink",
            "fl_oz": "8.45",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "limelite-fusion-energy-drink": {
            "name": "Limelite Fusion Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "32",
            "mg_per_oz": "2.6"
        },
        "lipton-brisk-tea": {
            "name": "Lipton Brisk Tea",
            "fl_oz": "12",
            "totalCaffeine": "8",
            "mg_per_oz": "0.7"
        },
        "lipton-iced-tea": {
            "name": "Lipton Iced Tea",
            "fl_oz": "20",
            "totalCaffeine": "48",
            "mg_per_oz": "2.4"
        },
        "lipton-natural-energy-tea": {
            "name": "Lipton Natural Energy Tea",
            "fl_oz": "8",
            "totalCaffeine": "75",
            "mg_per_oz": "9.4"
        },
        "lipton-tea": {
            "name": "Lipton Tea",
            "fl_oz": "8",
            "totalCaffeine": "55",
            "mg_per_oz": "6.9"
        },
        "liquid-caffeine": {
            "name": "Liquid Caffeine",
            "fl_oz": "1",
            "totalCaffeine": "500",
            "mg_per_oz": "500.0"
        },
        "liquid-ice-energy-drink": {
            "name": "Liquid Ice Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "80",
            "mg_per_oz": "9.6"
        },
        "liquid-lightning": {
            "name": "Liquid Lightning",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "liquid-ninja-energy-drink": {
            "name": "Liquid Ninja Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "liquid-z-juiced-energy-drink": {
            "name": "Liquid Z Juiced Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "long-black": {
            "name": "Long Black",
            "fl_oz": "6",
            "totalCaffeine": "154",
            "mg_per_oz": "25.7"
        },
        "long-island-iced-tea": {
            "name": "Long Island Iced Tea",
            "fl_oz": "20",
            "totalCaffeine": "40",
            "mg_per_oz": "2.0"
        },
        "lost-energy-drink": {
            "name": "Lost Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "lucozade": {
            "name": "Lucozade",
            "fl_oz": "12.85",
            "totalCaffeine": "46",
            "mg_per_oz": "3.6"
        },
        "lyft-energy-stick": {
            "name": "Lyft Energy Stick",
            "fl_oz": "8",
            "totalCaffeine": "120",
            "mg_per_oz": "15.0"
        },
        "m-150-energy-drink": {
            "name": "M-150 Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "mad-croc-energy-drink": {
            "name": "Mad Croc Energy Drink",
            "fl_oz": "8.45",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "mamma-chia-energy": {
            "name": "Mamma Chia Energy",
            "fl_oz": "10",
            "totalCaffeine": "90",
            "mg_per_oz": "9.0"
        },
        "mana-energy-potion": {
            "name": "Mana Energy Potion",
            "fl_oz": "1.35",
            "totalCaffeine": "160",
            "mg_per_oz": "118.5"
        },
        "mario-power-up-energy-drink": {
            "name": "Mario Power Up Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "120",
            "mg_per_oz": "14.3"
        },
        "matador-energy-drink": {
            "name": "Matador Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "80",
            "mg_per_oz": "5.0"
        },
        "matcha-tea": {
            "name": "Matcha Tea",
            "fl_oz": "8",
            "totalCaffeine": "70",
            "mg_per_oz": "8.8"
        },
        "mate-bros-energy-drink": {
            "name": "Mate Bros Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "99",
            "mg_per_oz": "12.4"
        },
        "mati-energy-drink": {
            "name": "MATI Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "110",
            "mg_per_oz": "9.2"
        },
        "max-velocity-energy-drink": {
            "name": "Max Velocity Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "155",
            "mg_per_oz": "9.7"
        },
        "maxwell-house-coffee": {
            "name": "Maxwell House Coffee",
            "fl_oz": "8",
            "totalCaffeine": "112",
            "mg_per_oz": "14.0"
        },
        "maxwell-house-max-boost-coffee": {
            "name": "Maxwell House Max Boost Coffee",
            "fl_oz": "8",
            "totalCaffeine": "196",
            "mg_per_oz": "24.5"
        },
        "mcdonalds-(mccafe)-latte": {
            "name": "McDonalds (McCafe) Latte",
            "fl_oz": "16",
            "totalCaffeine": "142",
            "mg_per_oz": "8.9"
        },
        "mcdonalds-(mccafe)-mocha": {
            "name": "McDonalds (McCafe) Mocha",
            "fl_oz": "16",
            "totalCaffeine": "167",
            "mg_per_oz": "10.4"
        },
        "mcdonalds-coffee": {
            "name": "McDonalds Coffee",
            "fl_oz": "16",
            "totalCaffeine": "145",
            "mg_per_oz": "9.1"
        },
        "mcdonalds-iced-coffee": {
            "name": "McDonalds Iced Coffee",
            "fl_oz": "22",
            "totalCaffeine": "200",
            "mg_per_oz": "9.1"
        },
        "mcdonalds-sweet-tea": {
            "name": "McDonalds Sweet Tea",
            "fl_oz": "32",
            "totalCaffeine": "100",
            "mg_per_oz": "3.1"
        },
        "mega-monster-energy-drink": {
            "name": "Mega Monster Energy Drink",
            "fl_oz": "24",
            "totalCaffeine": "240",
            "mg_per_oz": "10.0"
        },
        "mello-yello": {
            "name": "Mello Yello",
            "fl_oz": "12",
            "totalCaffeine": "51",
            "mg_per_oz": "4.2"
        },
        "mello-yello-zero": {
            "name": "Mello Yello Zero",
            "fl_oz": "12",
            "totalCaffeine": "51",
            "mg_per_oz": "4.2"
        },
        "mio-energy-water-enhancer": {
            "name": "MiO Energy Water Enhancer",
            "fl_oz": "8",
            "totalCaffeine": "60",
            "mg_per_oz": "7.5"
        },
        "missile-energy-drink": {
            "name": "Missile Energy Drink",
            "fl_oz": "8.43",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "mix-and-go": {
            "name": "Mix and Go",
            "fl_oz": "0.34",
            "totalCaffeine": "100",
            "mg_per_oz": "294.1"
        },
        "monavie": {
            "name": "MonaVie",
            "fl_oz": "2",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "monster-absolutely-zero": {
            "name": "Monster Absolutely Zero",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "monster-assault": {
            "name": "Monster Assault",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-cuba-lima": {
            "name": "Monster Cuba Lima",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-dub": {
            "name": "Monster DUB",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-energy-drink": {
            "name": "Monster Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-energy-mexico": {
            "name": "Monster Energy Mexico",
            "fl_oz": "16",
            "totalCaffeine": "92",
            "mg_per_oz": "5.8"
        },
        "monster-export": {
            "name": "Monster Export",
            "fl_oz": "8.46",
            "totalCaffeine": "76",
            "mg_per_oz": "9.0"
        },
        "monster-extra-strength": {
            "name": "Monster Extra Strength",
            "fl_oz": "12",
            "totalCaffeine": "160",
            "mg_per_oz": "13.3"
        },
        "monster-hitman-sniper": {
            "name": "Monster Hitman Sniper",
            "fl_oz": "3",
            "totalCaffeine": "240",
            "mg_per_oz": "80.0"
        },
        "monster-hydro-energy-drink": {
            "name": "Monster Hydro Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "125",
            "mg_per_oz": "7.8"
        },
        "monster-import": {
            "name": "Monster Import",
            "fl_oz": "18.6",
            "totalCaffeine": "179",
            "mg_per_oz": "9.6"
        },
        "monster-khaos": {
            "name": "Monster Khaos",
            "fl_oz": "16",
            "totalCaffeine": "154",
            "mg_per_oz": "9.6"
        },
        "monster-lo-carb": {
            "name": "Monster Lo-Carb",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "monster-m3-energy-drink": {
            "name": "Monster M3 Energy Drink",
            "fl_oz": "5",
            "totalCaffeine": "160",
            "mg_per_oz": "32.0"
        },
        "monster-mixxd-energy-drink": {
            "name": "Monster Mixxd Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-mutant-super-soda": {
            "name": "Monster Mutant Super Soda",
            "fl_oz": "20",
            "totalCaffeine": "115",
            "mg_per_oz": "5.8"
        },
        "monster-pink-energy-drink": {
            "name": "Monster Pink Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "monster-pipeline-punch": {
            "name": "Monster Pipeline Punch",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "monster-rehab-energy-drink": {
            "name": "Monster Rehab Energy Drink",
            "fl_oz": "15.5",
            "totalCaffeine": "161",
            "mg_per_oz": "10.4"
        },
        "monster-rehab-green-tea": {
            "name": "Monster Rehab Green Tea",
            "fl_oz": "15.5",
            "totalCaffeine": "155",
            "mg_per_oz": "10.0"
        },
        "monster-ripper": {
            "name": "Monster Ripper",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "monster-the-doctor-energy-drink": {
            "name": "Monster The Doctor Energy Drink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "monster-ultra-citron": {
            "name": "Monster Ultra Citron",
            "fl_oz": "16",
            "totalCaffeine": "152",
            "mg_per_oz": "9.5"
        },
        "monster-ultra-energy-drink": {
            "name": "Monster Ultra Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "monster-ultra-sunrise": {
            "name": "Monster Ultra Sunrise",
            "fl_oz": "16",
            "totalCaffeine": "151",
            "mg_per_oz": "9.4"
        },
        "monster-unleaded-energy-drink": {
            "name": "Monster Unleaded Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "moonshot-energy-drink": {
            "name": "Moonshot Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "115",
            "mg_per_oz": "9.6"
        },
        "morning-spark-energy-drink": {
            "name": "Morning Spark Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "170",
            "mg_per_oz": "10.1"
        },
        "morning-thunder-tea": {
            "name": "Morning Thunder Tea",
            "fl_oz": "8",
            "totalCaffeine": "40",
            "mg_per_oz": "5.0"
        },
        "mother-energy-drink": {
            "name": "Mother Energy Drink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "mother-inferno": {
            "name": "Mother Inferno",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "mountain-dew": {
            "name": "Mountain Dew",
            "fl_oz": "12",
            "totalCaffeine": "54",
            "mg_per_oz": "4.5"
        },
        "mountain-dew-baja-blast": {
            "name": "Mountain Dew Baja Blast",
            "fl_oz": "16",
            "totalCaffeine": "72",
            "mg_per_oz": "4.5"
        },
        "mountain-dew-black-label": {
            "name": "Mountain Dew Black Label",
            "fl_oz": "16",
            "totalCaffeine": "83",
            "mg_per_oz": "5.2"
        },
        "mountain-dew-code-red": {
            "name": "Mountain Dew Code Red",
            "fl_oz": "12",
            "totalCaffeine": "54",
            "mg_per_oz": "4.5"
        },
        "mountain-dew-game-fuel": {
            "name": "Mountain Dew Game Fuel",
            "fl_oz": "20",
            "totalCaffeine": "121",
            "mg_per_oz": "6.0"
        },
        "mountain-dew-kickstart": {
            "name": "Mountain Dew Kickstart",
            "fl_oz": "16",
            "totalCaffeine": "92",
            "mg_per_oz": "5.8"
        },
        "mountain-dew-kickstart-hydrating-boost": {
            "name": "Mountain Dew Kickstart Hydrating Boost",
            "fl_oz": "12",
            "totalCaffeine": "68",
            "mg_per_oz": "5.7"
        },
        "mountain-dew-live-wire": {
            "name": "Mountain Dew Live Wire",
            "fl_oz": "12",
            "totalCaffeine": "54",
            "mg_per_oz": "4.5"
        },
        "mountain-dew-spiked": {
            "name": "Mountain Dew Spiked",
            "fl_oz": "16",
            "totalCaffeine": "72",
            "mg_per_oz": "4.5"
        },
        "mountain-dew-voltage": {
            "name": "Mountain Dew Voltage",
            "fl_oz": "12",
            "totalCaffeine": "55",
            "mg_per_oz": "4.6"
        },
        "moxie-energy-drink": {
            "name": "Moxie Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "80",
            "mg_per_oz": "5.0"
        },
        "mug-root-beer": {
            "name": "Mug Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "muscle-milk-coffee-house": {
            "name": "Muscle Milk Coffee House",
            "fl_oz": "11",
            "totalCaffeine": "120",
            "mg_per_oz": "10.9"
        },
        "muscle-monster": {
            "name": "Muscle Monster",
            "fl_oz": "15",
            "totalCaffeine": "156",
            "mg_per_oz": "10.4"
        },
        "musclepharm-energy-drink": {
            "name": "MusclePharm Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "mushroom-coffee": {
            "name": "Mushroom Coffee",
            "fl_oz": "7",
            "totalCaffeine": "40",
            "mg_per_oz": "5.7"
        },
        "nap-nock-energy-shot": {
            "name": "Nap Nock Energy Shot",
            "fl_oz": "2.03",
            "totalCaffeine": "102",
            "mg_per_oz": "50.2"
        },
        "nawgan-energy-drink": {
            "name": "Nawgan Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "100",
            "mg_per_oz": "12.5"
        },
        "neo-energy-drink": {
            "name": "NEO Energy Drink",
            "fl_oz": "8.43",
            "totalCaffeine": "100",
            "mg_per_oz": "11.9"
        },
        "neon-energy-drink": {
            "name": "Neon Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "100",
            "mg_per_oz": "11.8"
        },
        "nerd-energy-drink": {
            "name": "Nerd Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "nescafe-ice-java": {
            "name": "Nescafe Ice Java",
            "fl_oz": "0.85",
            "totalCaffeine": "100",
            "mg_per_oz": "117.6"
        },
        "nescafe'-ricoffy": {
            "name": "Nescafe' Ricoffy",
            "fl_oz": "8",
            "totalCaffeine": "6",
            "mg_per_oz": "0.8"
        },
        "nespresso-coffee-capsules": {
            "name": "Nespresso Coffee Capsules",
            "fl_oz": "1.35",
            "totalCaffeine": "60",
            "mg_per_oz": "44.4"
        },
        "nestea-iced-tea": {
            "name": "Nestea Iced Tea",
            "fl_oz": "20",
            "totalCaffeine": "13",
            "mg_per_oz": "0.7"
        },
        "nestle-milo": {
            "name": "Nestle Milo",
            "fl_oz": "8",
            "totalCaffeine": "4",
            "mg_per_oz": "0.4"
        },
        "neu-nootropic-shot": {
            "name": "Neu Nootropic Shot",
            "fl_oz": "2",
            "totalCaffeine": "125",
            "mg_per_oz": "62.5"
        },
        "neuro-sonic": {
            "name": "Neuro Sonic",
            "fl_oz": "14.5",
            "totalCaffeine": "100",
            "mg_per_oz": "6.9"
        },
        "neurofuel-energy-drink": {
            "name": "Neurofuel Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "128",
            "mg_per_oz": "10.6"
        },
        "neurogum-nootropic-chewing-gum": {
            "name": "Neurogum Nootropic Chewing Gum",
            "fl_oz": "1",
            "totalCaffeine": "40",
            "mg_per_oz": "40.0"
        },
        "neutron-energy-drink": {
            "name": "Neutron Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "180",
            "mg_per_oz": "11.2"
        },
        "nexcite-energy-drink": {
            "name": "Nexcite Energy Drink",
            "fl_oz": "6.76",
            "totalCaffeine": "64",
            "mg_per_oz": "9.5"
        },
        "no-fear-energy-drink": {
            "name": "No Fear Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "182",
            "mg_per_oz": "11.4"
        },
        "nodoz-energy-shot": {
            "name": "NoDoz Energy Shot",
            "fl_oz": "1.89",
            "totalCaffeine": "115",
            "mg_per_oz": "60.8"
        },
        "nos-active-sports-drink": {
            "name": "NOS Active Sports Drink",
            "fl_oz": "22",
            "totalCaffeine": "221",
            "mg_per_oz": "10.0"
        },
        "nos-energy-drink": {
            "name": "NOS Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "nos-energy-drink-(new-zealand-brand)": {
            "name": "NOS Energy Drink (New Zealand Brand)",
            "fl_oz": "19.21",
            "totalCaffeine": "160",
            "mg_per_oz": "8.3"
        },
        "nos-loaded-cherry": {
            "name": "NOS Loaded Cherry",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "nrg-microshot": {
            "name": "NRG MicroShot",
            "fl_oz": "0.2",
            "totalCaffeine": "130",
            "mg_per_oz": "650.0"
        },
        "nuun-energy-drink": {
            "name": "Nuun Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "40",
            "mg_per_oz": "2.5"
        },
        "o-infused-water---energize": {
            "name": "O Infused Water - Energize",
            "fl_oz": "16",
            "totalCaffeine": "64",
            "mg_per_oz": "4.0"
        },
        "octane-energy-burst": {
            "name": "Octane Energy Burst",
            "fl_oz": "1.01",
            "totalCaffeine": "10",
            "mg_per_oz": "9.9"
        },
        "octane-energy-drink": {
            "name": "Octane Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "225",
            "mg_per_oz": "18.8"
        },
        "oi-ocha-green-tea": {
            "name": "Oi Ocha Green Tea",
            "fl_oz": "16.9",
            "totalCaffeine": "60",
            "mg_per_oz": "3.6"
        },
        "ok-energy-drink": {
            "name": "OK Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "ol'-glory-energy-drink": {
            "name": "Ol' Glory Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "ole-energy-drink": {
            "name": "Ole Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "on-energy-drink": {
            "name": "ON Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "ongo-energy-shot": {
            "name": "OnGo Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "177",
            "mg_per_oz": "88.5"
        },
        "onthego-drink-mix": {
            "name": "OnTheGo Drink Mix",
            "fl_oz": "8",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "oprah-chai-tea-latte": {
            "name": "Oprah Chai Tea Latte",
            "fl_oz": "16",
            "totalCaffeine": "50",
            "mg_per_oz": "3.1"
        },
        "orange-crush": {
            "name": "Orange Crush",
            "fl_oz": "20",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "oregon-chai-tea": {
            "name": "Oregon Chai Tea",
            "fl_oz": "4",
            "totalCaffeine": "33",
            "mg_per_oz": "8.1"
        },
        "ovaltine": {
            "name": "Ovaltine",
            "fl_oz": "8",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "pacific-chai": {
            "name": "Pacific Chai",
            "fl_oz": "12",
            "totalCaffeine": "41",
            "mg_per_oz": "3.4"
        },
        "panera-bread-coffee": {
            "name": "Panera Bread Coffee",
            "fl_oz": "16",
            "totalCaffeine": "189",
            "mg_per_oz": "11.8"
        },
        "pc-cola": {
            "name": "PC Cola",
            "fl_oz": "12",
            "totalCaffeine": "12",
            "mg_per_oz": "1.0"
        },
        "pc-cola-diet": {
            "name": "PC Cola Diet",
            "fl_oz": "12",
            "totalCaffeine": "13",
            "mg_per_oz": "1.1"
        },
        "peace-tea": {
            "name": "Peace Tea",
            "fl_oz": "23",
            "totalCaffeine": "60",
            "mg_per_oz": "2.6"
        },
        "peet's-brewed-coffee": {
            "name": "Peet's Brewed Coffee",
            "fl_oz": "16",
            "totalCaffeine": "267",
            "mg_per_oz": "16.7"
        },
        "peet's-caffe-americano": {
            "name": "Peet's Caffe Americano",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "peet's-caffe-latte": {
            "name": "Peet's Caffe Latte",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "peet's-caffe-mocha": {
            "name": "Peet's Caffe Mocha",
            "fl_oz": "16",
            "totalCaffeine": "165",
            "mg_per_oz": "10.3"
        },
        "peet's-cappuccino": {
            "name": "Peet's Cappuccino",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "peet's-coffee-espresso": {
            "name": "Peet's Coffee Espresso",
            "fl_oz": "1.5",
            "totalCaffeine": "70",
            "mg_per_oz": "46.7"
        },
        "peet's-decaf-espresso": {
            "name": "Peet's Decaf Espresso",
            "fl_oz": "1.5",
            "totalCaffeine": "10",
            "mg_per_oz": "6.7"
        },
        "peet's-iced-coffee": {
            "name": "Peet's Iced Coffee",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "peet's-iced-latte": {
            "name": "Peet's Iced Latte",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "peet's-iced-mocha": {
            "name": "Peet's Iced Mocha",
            "fl_oz": "16",
            "totalCaffeine": "165",
            "mg_per_oz": "10.3"
        },
        "peppod-energy-drink": {
            "name": "PepPod Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "81",
            "mg_per_oz": "10.1"
        },
        "pepsi-caffeine-free": {
            "name": "Pepsi Caffeine Free",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "pepsi-cola": {
            "name": "Pepsi Cola",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "pepsi-diet-lemon": {
            "name": "Pepsi Diet Lemon",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "pepsi-diet-lime": {
            "name": "Pepsi Diet Lime",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "pepsi-diet-vanilla": {
            "name": "Pepsi Diet Vanilla",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "pepsi-max": {
            "name": "Pepsi Max",
            "fl_oz": "12",
            "totalCaffeine": "69",
            "mg_per_oz": "5.8"
        },
        "pepsi-max-uk,-nz,-au": {
            "name": "Pepsi Max UK, NZ, AU",
            "fl_oz": "12.03",
            "totalCaffeine": "43",
            "mg_per_oz": "3.5"
        },
        "pepsi-next": {
            "name": "Pepsi Next",
            "fl_oz": "12",
            "totalCaffeine": "32",
            "mg_per_oz": "2.7"
        },
        "pepsi-one": {
            "name": "Pepsi One",
            "fl_oz": "12",
            "totalCaffeine": "54",
            "mg_per_oz": "4.5"
        },
        "pepsi-slurpee": {
            "name": "Pepsi Slurpee",
            "fl_oz": "8",
            "totalCaffeine": "14",
            "mg_per_oz": "1.8"
        },
        "pepsi-throwback": {
            "name": "Pepsi Throwback",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "pepsi-true": {
            "name": "Pepsi True",
            "fl_oz": "7.5",
            "totalCaffeine": "24",
            "mg_per_oz": "3.2"
        },
        "phix-energy-drink": {
            "name": "Phix Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "80",
            "mg_per_oz": "6.7"
        },
        "pibb-xtra": {
            "name": "Pibb Xtra",
            "fl_oz": "12",
            "totalCaffeine": "40",
            "mg_per_oz": "3.3"
        },
        "pibb-zero": {
            "name": "Pibb Zero",
            "fl_oz": "12",
            "totalCaffeine": "40",
            "mg_per_oz": "3.3"
        },
        "pirate-energy-shot": {
            "name": "Pirate Energy Shot",
            "fl_oz": "1.7",
            "totalCaffeine": "133",
            "mg_per_oz": "78.2"
        },
        "plasma-energy-drink": {
            "name": "Plasma Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "player-aid-energy-shot": {
            "name": "Player Aid Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "120",
            "mg_per_oz": "60.0"
        },
        "please-energy-drink": {
            "name": "Please Energy Drink",
            "fl_oz": "9.3",
            "totalCaffeine": "88",
            "mg_per_oz": "9.5"
        },
        "positive-charge-energy-drink": {
            "name": "Positive Charge Energy Drink",
            "fl_oz": "16.5",
            "totalCaffeine": "150",
            "mg_per_oz": "9.1"
        },
        "positive-energy-juice": {
            "name": "Positive Energy Juice",
            "fl_oz": "12",
            "totalCaffeine": "150",
            "mg_per_oz": "12.5"
        },
        "potencia-energy-drink": {
            "name": "Potencia Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "250",
            "mg_per_oz": "15.6"
        },
        "power-edge-energy-drink-mix": {
            "name": "Power Edge Energy Drink Mix",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "power-horse-energy-drink": {
            "name": "Power Horse Energy Drink",
            "fl_oz": "8.45",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "power-trip-energy-drink": {
            "name": "Power Trip Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "210",
            "mg_per_oz": "13.1"
        },
        "powerade-fuel-+": {
            "name": "Powerade Fuel +",
            "fl_oz": "10.15",
            "totalCaffeine": "96",
            "mg_per_oz": "9.5"
        },
        "powerthirst-energy-drink": {
            "name": "Powerthirst Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "190",
            "mg_per_oz": "11.9"
        },
        "premium-cola": {
            "name": "Premium Cola",
            "fl_oz": "11.16",
            "totalCaffeine": "83",
            "mg_per_oz": "7.4"
        },
        "pronto-coffee": {
            "name": "Pronto Coffee",
            "fl_oz": "6",
            "totalCaffeine": "67",
            "mg_per_oz": "11.2"
        },
        "propel-zero-energy-mix": {
            "name": "Propel Zero Energy Mix",
            "fl_oz": "16",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "pulse": {
            "name": "Pulse",
            "fl_oz": "10.15",
            "totalCaffeine": "21",
            "mg_per_oz": "2.1"
        },
        "pure-cofain-699": {
            "name": "Pure Cofain 699",
            "fl_oz": "8.46",
            "totalCaffeine": "175",
            "mg_per_oz": "20.7"
        },
        "pure-kick-energy-drink": {
            "name": "Pure Kick Energy Drink",
            "fl_oz": "20",
            "totalCaffeine": "200",
            "mg_per_oz": "10.0"
        },
        "pure-leaf-iced-tea": {
            "name": "Pure Leaf Iced Tea",
            "fl_oz": "18.5",
            "totalCaffeine": "57",
            "mg_per_oz": "3.1"
        },
        "pyure-o.e.o.-energy-shot": {
            "name": "Pyure o.e.o. Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "100",
            "mg_per_oz": "50.0"
        },
        "quad-energy-drink": {
            "name": "Quad Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "140",
            "mg_per_oz": "8.8"
        },
        "race-energy-drink": {
            "name": "Race Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "80",
            "mg_per_oz": "9.6"
        },
        "radioactive-energy-drink": {
            "name": "Radioactive Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "156",
            "mg_per_oz": "9.8"
        },
        "rage-inferno": {
            "name": "Rage Inferno",
            "fl_oz": "24",
            "totalCaffeine": "375",
            "mg_per_oz": "15.6"
        },
        "rage-liquid-energy": {
            "name": "Rage Liquid Energy",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "ram-jam-energy-drink": {
            "name": "Ram Jam Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rc-cola": {
            "name": "RC Cola",
            "fl_oz": "12",
            "totalCaffeine": "43",
            "mg_per_oz": "3.6"
        },
        "rc-cola,-cherry": {
            "name": "RC Cola, Cherry",
            "fl_oz": "12",
            "totalCaffeine": "43",
            "mg_per_oz": "3.6"
        },
        "real-beanz-iced-coffee": {
            "name": "Real Beanz Iced Coffee",
            "fl_oz": "9.5",
            "totalCaffeine": "66",
            "mg_per_oz": "6.9"
        },
        "realife-plus-energy": {
            "name": "Realife Plus Energy",
            "fl_oz": "0.34",
            "totalCaffeine": "80",
            "mg_per_oz": "235.3"
        },
        "reckless-energy-shot": {
            "name": "Reckless Energy Shot",
            "fl_oz": "2.37",
            "totalCaffeine": "125",
            "mg_per_oz": "52.7"
        },
        "red-bull": {
            "name": "Red Bull",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-blue-edition": {
            "name": "Red Bull Blue Edition",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-cherry-edition": {
            "name": "Red Bull Cherry Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-bull-green-edition": {
            "name": "Red Bull Green Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-bull-lime-edition": {
            "name": "Red Bull Lime Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-bull-orange-edition": {
            "name": "Red Bull Orange Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-bull-purple-edition": {
            "name": "Red Bull Purple Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-bull-red-edition": {
            "name": "Red Bull Red Edition",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-silver-edition": {
            "name": "Red Bull Silver Edition",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-sugar-free": {
            "name": "Red Bull Sugar Free",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-total-zero": {
            "name": "Red Bull Total Zero",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-bull-yellow-edition": {
            "name": "Red Bull Yellow Edition",
            "fl_oz": "12",
            "totalCaffeine": "114",
            "mg_per_oz": "9.5"
        },
        "red-devil-energy-drink": {
            "name": "Red Devil Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "red-eye-energy-drink": {
            "name": "Red Eye Energy Drink",
            "fl_oz": "11.1",
            "totalCaffeine": "106",
            "mg_per_oz": "9.5"
        },
        "red-fin-energy-shot": {
            "name": "Red Fin Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "200",
            "mg_per_oz": "100.0"
        },
        "red-flash": {
            "name": "Red Flash",
            "fl_oz": "12",
            "totalCaffeine": "37",
            "mg_per_oz": "3.1"
        },
        "red-heel-drink": {
            "name": "Red Heel Drink",
            "fl_oz": "8.5",
            "totalCaffeine": "75",
            "mg_per_oz": "8.8"
        },
        "red-power-elixir": {
            "name": "Red Power Elixir",
            "fl_oz": "12",
            "totalCaffeine": "180",
            "mg_per_oz": "15.0"
        },
        "red-rain-energy-drink": {
            "name": "Red Rain Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-rock-cola": {
            "name": "Red Rock Cola",
            "fl_oz": "12",
            "totalCaffeine": "26",
            "mg_per_oz": "2.2"
        },
        "red-rooster": {
            "name": "Red Rooster",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "red-rose-energy-tea": {
            "name": "Red Rose Energy Tea",
            "fl_oz": "8",
            "totalCaffeine": "60",
            "mg_per_oz": "7.5"
        },
        "red-thunder-energy-drink": {
            "name": "Red Thunder Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "75",
            "mg_per_oz": "8.9"
        },
        "red-thunder-energy-shot": {
            "name": "Red Thunder Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "138",
            "mg_per_oz": "69.0"
        },
        "red-thunder-extra-strength": {
            "name": "Red Thunder Extra Strength",
            "fl_oz": "2",
            "totalCaffeine": "230",
            "mg_per_oz": "115.0"
        },
        "redline-energy-drink": {
            "name": "Redline Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "250",
            "mg_per_oz": "31.2"
        },
        "redline-power-rush": {
            "name": "Redline Power Rush",
            "fl_oz": "2.5",
            "totalCaffeine": "350",
            "mg_per_oz": "140.0"
        },
        "redline-princess": {
            "name": "Redline Princess",
            "fl_oz": "8",
            "totalCaffeine": "250",
            "mg_per_oz": "31.2"
        },
        "redline-xtreme-energy-drink": {
            "name": "Redline Xtreme Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "316",
            "mg_per_oz": "39.5"
        },
        "redline-xtreme-shot": {
            "name": "Redline Xtreme Shot",
            "fl_oz": "3",
            "totalCaffeine": "300",
            "mg_per_oz": "100.0"
        },
        "reeds-energy-elixir": {
            "name": "Reeds Energy Elixir",
            "fl_oz": "10.5",
            "totalCaffeine": "20",
            "mg_per_oz": "1.9"
        },
        "reize-energy-drink": {
            "name": "Reize Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "50",
            "mg_per_oz": "5.9"
        },
        "relentless-energy-drink": {
            "name": "Relentless Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "rhino-rush-energy-shot": {
            "name": "Rhino Rush Energy Shot",
            "fl_oz": "1.8",
            "totalCaffeine": "200",
            "mg_per_oz": "111.1"
        },
        "rip-it-energy-drink": {
            "name": "Rip It Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rip-it-energy-shot": {
            "name": "Rip It Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "100",
            "mg_per_oz": "50.0"
        },
        "ripped-force-energy-drink": {
            "name": "Ripped Force Energy Drink",
            "fl_oz": "18",
            "totalCaffeine": "200",
            "mg_per_oz": "11.1"
        },
        "ripped-hardcore-liquid-energy-drink": {
            "name": "Ripped Hardcore Liquid Energy Drink",
            "fl_oz": "11.16",
            "totalCaffeine": "300",
            "mg_per_oz": "26.9"
        },
        "ritz-cola": {
            "name": "Ritz Cola",
            "fl_oz": "12",
            "totalCaffeine": "10",
            "mg_per_oz": "0.9"
        },
        "rize-energy-drink": {
            "name": "Rize Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "60",
            "mg_per_oz": "7.1"
        },
        "roaring-lion-energy-drink": {
            "name": "Roaring Lion Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "161",
            "mg_per_oz": "9.5"
        },
        "robust-energy-drink": {
            "name": "Robust Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "79",
            "mg_per_oz": "9.3"
        },
        "robusta-coffee": {
            "name": "Robusta Coffee",
            "fl_oz": "8",
            "totalCaffeine": "265",
            "mg_per_oz": "33.1"
        },
        "rock-on-energy-shot": {
            "name": "Rock On Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "125",
            "mg_per_oz": "62.5"
        },
        "rockstar-(nz-/-aus)": {
            "name": "Rockstar (NZ / Aus)",
            "fl_oz": "16",
            "totalCaffeine": "151",
            "mg_per_oz": "9.4"
        },
        "rockstar-boom!": {
            "name": "Rockstar Boom!",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-burner-energy-drink": {
            "name": "Rockstar Burner Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-energy-cola": {
            "name": "Rockstar Energy Cola",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-energy-drink": {
            "name": "Rockstar Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-energy-shot": {
            "name": "Rockstar Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "200",
            "mg_per_oz": "80.0"
        },
        "rockstar-energy-water": {
            "name": "Rockstar Energy Water",
            "fl_oz": "20",
            "totalCaffeine": "180",
            "mg_per_oz": "9.0"
        },
        "rockstar-horchata-energy-drink": {
            "name": "Rockstar Horchata Energy Drink",
            "fl_oz": "15",
            "totalCaffeine": "225",
            "mg_per_oz": "15.0"
        },
        "rockstar-iced-energy-drink": {
            "name": "Rockstar Iced Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-juiced": {
            "name": "Rockstar Juiced",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-lime-freeze": {
            "name": "Rockstar Lime Freeze",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-organic-energy-drink": {
            "name": "Rockstar Organic Energy Drink",
            "fl_oz": "15",
            "totalCaffeine": "160",
            "mg_per_oz": "10.7"
        },
        "rockstar-perfect-berry": {
            "name": "Rockstar Perfect Berry",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-pina-colada": {
            "name": "Rockstar Pina Colada",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-punched": {
            "name": "Rockstar Punched",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-punched-(non-usa)": {
            "name": "Rockstar Punched (non-USA)",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "rockstar-punched-guava": {
            "name": "Rockstar Punched Guava",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-pure-zero-energy-drink": {
            "name": "Rockstar Pure Zero Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-recovery": {
            "name": "Rockstar Recovery",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-revolt-energy-drink": {
            "name": "Rockstar Revolt Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-roasted": {
            "name": "Rockstar Roasted",
            "fl_oz": "15",
            "totalCaffeine": "220",
            "mg_per_oz": "14.7"
        },
        "rockstar-sparkling-energy": {
            "name": "Rockstar Sparkling Energy",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "rockstar-sport-energy-shake": {
            "name": "Rockstar Sport Energy Shake",
            "fl_oz": "15",
            "totalCaffeine": "160",
            "mg_per_oz": "10.7"
        },
        "rockstar-super-sours": {
            "name": "Rockstar Super Sours",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-xdurance-energy-drink": {
            "name": "Rockstar XDurance Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rockstar-zero-carb": {
            "name": "Rockstar Zero Carb",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "rocky-mountain-high-energy-drink": {
            "name": "Rocky Mountain High Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "root9-vitality-drink": {
            "name": "Root9 Vitality Drink",
            "fl_oz": "12",
            "totalCaffeine": "50",
            "mg_per_oz": "4.2"
        },
        "rootjack-caffeinated-pirate-root-beer": {
            "name": "RootJack Caffeinated Pirate Root Beer",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "ruby-red-squirt": {
            "name": "Ruby Red Squirt",
            "fl_oz": "12",
            "totalCaffeine": "39",
            "mg_per_oz": "3.2"
        },
        "rude-energy-drink": {
            "name": "Rude Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "75",
            "mg_per_oz": "9.4"
        },
        "rumba-energy-juice": {
            "name": "Rumba Energy Juice",
            "fl_oz": "16",
            "totalCaffeine": "170",
            "mg_per_oz": "10.6"
        },
        "runa-clean-energy-drink": {
            "name": "Runa Clean Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "120",
            "mg_per_oz": "14.2"
        },
        "rush!-energy": {
            "name": "Rush! Energy",
            "fl_oz": "8.3",
            "totalCaffeine": "50",
            "mg_per_oz": "6.0"
        },
        "sambazon-amazon-energy-drink": {
            "name": "Sambazon Amazon Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "80",
            "mg_per_oz": "6.7"
        },
        "sarsaparilla": {
            "name": "Sarsaparilla",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "scheckters-energy-drink": {
            "name": "Scheckters Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "screamin-energy-max-hit": {
            "name": "Screamin Energy Max Hit",
            "fl_oz": "0.61",
            "totalCaffeine": "185",
            "mg_per_oz": "303.3"
        },
        "seattle's-best-brewed-coffee": {
            "name": "Seattle's Best Brewed Coffee",
            "fl_oz": "12",
            "totalCaffeine": "260",
            "mg_per_oz": "21.7"
        },
        "sencha-green-tea-shot": {
            "name": "Sencha Green Tea Shot",
            "fl_oz": "6.4",
            "totalCaffeine": "40",
            "mg_per_oz": "6.2"
        },
        "shark-energy-drink": {
            "name": "Shark Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "shasta-cola": {
            "name": "Shasta Cola",
            "fl_oz": "12",
            "totalCaffeine": "43",
            "mg_per_oz": "3.6"
        },
        "shock-coffee-triple-latte": {
            "name": "Shock Coffee Triple Latte",
            "fl_oz": "8",
            "totalCaffeine": "231",
            "mg_per_oz": "28.9"
        },
        "sin-energy-drink": {
            "name": "Sin Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "90",
            "mg_per_oz": "10.7"
        },
        "ski-soda": {
            "name": "Ski Soda",
            "fl_oz": "12",
            "totalCaffeine": "69",
            "mg_per_oz": "5.8"
        },
        "skinny-cow-iced-coffee": {
            "name": "Skinny Cow Iced Coffee",
            "fl_oz": "8",
            "totalCaffeine": "70",
            "mg_per_oz": "8.8"
        },
        "slammers-energy-drink": {
            "name": "Slammers Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "slap-energy-drink": {
            "name": "SLAP Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "220",
            "mg_per_oz": "13.8"
        },
        "slimfast-cappuccino-delight-shake": {
            "name": "SlimFast Cappuccino Delight Shake",
            "fl_oz": "10",
            "totalCaffeine": "40",
            "mg_per_oz": "4.0"
        },
        "slurpee": {
            "name": "Slurpee",
            "fl_oz": "16",
            "totalCaffeine": "40",
            "mg_per_oz": "2.5"
        },
        "snapple-tea": {
            "name": "Snapple Tea",
            "fl_oz": "16",
            "totalCaffeine": "37",
            "mg_per_oz": "2.3"
        },
        "sobe-adrenaline-rush": {
            "name": "SoBe Adrenaline Rush",
            "fl_oz": "8.3",
            "totalCaffeine": "79",
            "mg_per_oz": "9.5"
        },
        "sobe-energy-citrus": {
            "name": "SoBe Energy Citrus",
            "fl_oz": "20",
            "totalCaffeine": "77",
            "mg_per_oz": "3.9"
        },
        "sobe-green-tea": {
            "name": "SoBe Green Tea",
            "fl_oz": "20",
            "totalCaffeine": "10",
            "mg_per_oz": "0.5"
        },
        "sobe-power-fruit-punch": {
            "name": "SoBe Power Fruit Punch",
            "fl_oz": "20",
            "totalCaffeine": "76",
            "mg_per_oz": "3.8"
        },
        "soda-stream": {
            "name": "Soda Stream",
            "fl_oz": "8",
            "totalCaffeine": "80",
            "mg_per_oz": "10.0"
        },
        "source-energy-drink": {
            "name": "Source Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "southern-sweet-tea": {
            "name": "Southern Sweet Tea",
            "fl_oz": "16",
            "totalCaffeine": "41",
            "mg_per_oz": "2.6"
        },
        "spark-energy-drink": {
            "name": "Spark Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "120",
            "mg_per_oz": "15.0"
        },
        "spartan-energy-drink": {
            "name": "Spartan Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "90",
            "mg_per_oz": "10.7"
        },
        "speed-energy-drink": {
            "name": "Speed Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "186",
            "mg_per_oz": "11.6"
        },
        "speed-stack-energy-drink": {
            "name": "Speed Stack Energy Drink",
            "fl_oz": "18",
            "totalCaffeine": "250",
            "mg_per_oz": "13.9"
        },
        "spider-energy-drink": {
            "name": "Spider Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "spike-energy-double-shot": {
            "name": "Spike Energy Double Shot",
            "fl_oz": "4.26",
            "totalCaffeine": "350",
            "mg_per_oz": "82.2"
        },
        "spike-energy-drink": {
            "name": "Spike Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "350",
            "mg_per_oz": "21.9"
        },
        "spike-shooter": {
            "name": "SPIKE Shooter",
            "fl_oz": "8.4",
            "totalCaffeine": "300",
            "mg_per_oz": "35.7"
        },
        "sport-max-energy-shot": {
            "name": "Sport Max Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "140",
            "mg_per_oz": "70.0"
        },
        "sprite": {
            "name": "Sprite",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "squirt-soda": {
            "name": "Squirt Soda",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "stakk'd-caffeine-mixer": {
            "name": "Stakk'd Caffeine Mixer",
            "fl_oz": "1",
            "totalCaffeine": "180",
            "mg_per_oz": "180.0"
        },
        "starbucks-bottled-frappuccino": {
            "name": "Starbucks Bottled Frappuccino",
            "fl_oz": "13.7",
            "totalCaffeine": "130",
            "mg_per_oz": "9.5"
        },
        "starbucks-bottled-iced-coffee": {
            "name": "Starbucks Bottled Iced Coffee",
            "fl_oz": "11",
            "totalCaffeine": "110",
            "mg_per_oz": "10.0"
        },
        "starbucks-classics-caffe-mocha": {
            "name": "Starbucks Classics Caffe Mocha",
            "fl_oz": "48",
            "totalCaffeine": "510",
            "mg_per_oz": "10.6"
        },
        "starbucks-cold-brew-coffee": {
            "name": "Starbucks Cold Brew Coffee",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "starbucks-decaf-coffee": {
            "name": "Starbucks Decaf Coffee",
            "fl_oz": "16",
            "totalCaffeine": "25",
            "mg_per_oz": "1.6"
        },
        "starbucks-doubleshot": {
            "name": "Starbucks Doubleshot",
            "fl_oz": "6.5",
            "totalCaffeine": "110",
            "mg_per_oz": "16.9"
        },
        "starbucks-doubleshot-energy-+-coffee": {
            "name": "Starbucks Doubleshot Energy + Coffee",
            "fl_oz": "15",
            "totalCaffeine": "145",
            "mg_per_oz": "9.7"
        },
        "starbucks-grande-caffe-americano": {
            "name": "Starbucks Grande Caffe Americano",
            "fl_oz": "16",
            "totalCaffeine": "225",
            "mg_per_oz": "14.1"
        },
        "starbucks-grande-caffe-latte": {
            "name": "Starbucks Grande Caffe Latte",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "starbucks-grande-caffe-mocha": {
            "name": "Starbucks Grande Caffe Mocha",
            "fl_oz": "16",
            "totalCaffeine": "175",
            "mg_per_oz": "10.9"
        },
        "starbucks-grande-cappuccino": {
            "name": "Starbucks Grande Cappuccino",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "starbucks-grande-coffee": {
            "name": "Starbucks Grande Coffee",
            "fl_oz": "16",
            "totalCaffeine": "330",
            "mg_per_oz": "20.6"
        },
        "starbucks-iced-espresso": {
            "name": "Starbucks Iced Espresso",
            "fl_oz": "16",
            "totalCaffeine": "225",
            "mg_per_oz": "14.1"
        },
        "starbucks-latte-macchiato": {
            "name": "Starbucks Latte Macchiato",
            "fl_oz": "16",
            "totalCaffeine": "225",
            "mg_per_oz": "14.1"
        },
        "starbucks-nitro-cold-brew-coffee": {
            "name": "Starbucks Nitro Cold Brew Coffee",
            "fl_oz": "16",
            "totalCaffeine": "325",
            "mg_per_oz": "20.3"
        },
        "starbucks-protein-and-coffee": {
            "name": "Starbucks Protein and Coffee",
            "fl_oz": "8",
            "totalCaffeine": "110",
            "mg_per_oz": "13.8"
        },
        "starbucks-refreshers": {
            "name": "Starbucks Refreshers",
            "fl_oz": "16",
            "totalCaffeine": "50",
            "mg_per_oz": "3.1"
        },
        "starbucks-refreshers-canned": {
            "name": "Starbucks Refreshers Canned",
            "fl_oz": "12",
            "totalCaffeine": "50",
            "mg_per_oz": "4.2"
        },
        "starbucks-verismo-coffee-pods": {
            "name": "Starbucks Verismo Coffee Pods",
            "fl_oz": "8",
            "totalCaffeine": "60",
            "mg_per_oz": "7.5"
        },
        "starbucks-via-ready-brew": {
            "name": "Starbucks Via Ready Brew",
            "fl_oz": "8",
            "totalCaffeine": "135",
            "mg_per_oz": "16.9"
        },
        "steaz-organic-energy-drink": {
            "name": "Steaz Organic Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "100",
            "mg_per_oz": "8.3"
        },
        "steep-18-cold-brew": {
            "name": "Steep 18 Cold Brew",
            "fl_oz": "8",
            "totalCaffeine": "90",
            "mg_per_oz": "11.2"
        },
        "stewie's-mind-erase-elixir": {
            "name": "Stewie's Mind Erase Elixir",
            "fl_oz": "8.4",
            "totalCaffeine": "50",
            "mg_per_oz": "6.0"
        },
        "stok-black-coffee-shots": {
            "name": "Stok Black Coffee Shots",
            "fl_oz": "0.44",
            "totalCaffeine": "40",
            "mg_per_oz": "90.9"
        },
        "street-king-energy-shot": {
            "name": "Street King Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "280",
            "mg_per_oz": "112.0"
        },
        "strike-force-energy-drink": {
            "name": "Strike Force Energy Drink",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "stumptown-cold-brew-+-milk": {
            "name": "Stumptown Cold Brew + Milk",
            "fl_oz": "16",
            "totalCaffeine": "319",
            "mg_per_oz": "19.9"
        },
        "stumptown-cold-brew-chocolate-+-milk": {
            "name": "Stumptown Cold Brew Chocolate + Milk",
            "fl_oz": "16",
            "totalCaffeine": "340",
            "mg_per_oz": "21.2"
        },
        "stumptown-cold-brew-coffee": {
            "name": "Stumptown Cold Brew Coffee",
            "fl_oz": "10.5",
            "totalCaffeine": "279",
            "mg_per_oz": "26.6"
        },
        "stumptown-nitro-cold-brew": {
            "name": "Stumptown Nitro Cold Brew",
            "fl_oz": "11",
            "totalCaffeine": "330",
            "mg_per_oz": "30.0"
        },
        "sun-drop-soda": {
            "name": "Sun Drop Soda",
            "fl_oz": "12",
            "totalCaffeine": "64",
            "mg_per_oz": "5.3"
        },
        "sunkist-orange-soda": {
            "name": "Sunkist Orange Soda",
            "fl_oz": "12",
            "totalCaffeine": "41",
            "mg_per_oz": "3.4"
        },
        "sunkist-sparkling-lemonade": {
            "name": "Sunkist Sparkling Lemonade",
            "fl_oz": "12",
            "totalCaffeine": "41",
            "mg_per_oz": "3.4"
        },
        "sunkist-ten": {
            "name": "Sunkist Ten",
            "fl_oz": "20",
            "totalCaffeine": "68",
            "mg_per_oz": "3.4"
        },
        "sunnyd-x-energy-drink": {
            "name": "SunnyD X Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "sunup-green-coffee": {
            "name": "Sunup Green Coffee",
            "fl_oz": "15",
            "totalCaffeine": "285",
            "mg_per_oz": "19.0"
        },
        "surge-citrus-soda": {
            "name": "Surge Citrus Soda",
            "fl_oz": "16",
            "totalCaffeine": "69",
            "mg_per_oz": "4.3"
        },
        "surge-energy-shot": {
            "name": "Surge Energy Shot",
            "fl_oz": "2.5",
            "totalCaffeine": "140",
            "mg_per_oz": "56.0"
        },
        "svelte-cappuccino-protein-shake": {
            "name": "Svelte Cappuccino Protein Shake",
            "fl_oz": "11",
            "totalCaffeine": "65",
            "mg_per_oz": "5.9"
        },
        "swing-juice-energy-drink": {
            "name": "Swing Juice Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "50",
            "mg_per_oz": "3.1"
        },
        "t-licious-energy-drink": {
            "name": "t-licious Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "t-virus-antidote": {
            "name": "T-Virus Antidote",
            "fl_oz": "8.45",
            "totalCaffeine": "120",
            "mg_per_oz": "14.2"
        },
        "tab-diet-cola": {
            "name": "TAB Diet Cola",
            "fl_oz": "12",
            "totalCaffeine": "45",
            "mg_per_oz": "3.8"
        },
        "taiwanese-milk-tea": {
            "name": "Taiwanese Milk Tea",
            "fl_oz": "13.526",
            "totalCaffeine": "130",
            "mg_per_oz": "9.6"
        },
        "talon-energy-drink": {
            "name": "Talon Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "174",
            "mg_per_oz": "10.9"
        },
        "tapout-energy-drink": {
            "name": "TAPOUT Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "taster's-choice-instant-coffee": {
            "name": "Taster's Choice Instant Coffee",
            "fl_oz": "8",
            "totalCaffeine": "98",
            "mg_per_oz": "12.2"
        },
        "taurus-energy-drink": {
            "name": "Taurus Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "50",
            "mg_per_oz": "5.9"
        },
        "tazo-chai": {
            "name": "Tazo Chai",
            "fl_oz": "8",
            "totalCaffeine": "47",
            "mg_per_oz": "5.9"
        },
        "tea-(black)": {
            "name": "Tea (Black)",
            "fl_oz": "8",
            "totalCaffeine": "42",
            "mg_per_oz": "5.2"
        },
        "tea-(decaf)": {
            "name": "Tea (Decaf)",
            "fl_oz": "8",
            "totalCaffeine": "5",
            "mg_per_oz": "0.6"
        },
        "tea-(green)": {
            "name": "Tea (Green)",
            "fl_oz": "8",
            "totalCaffeine": "25",
            "mg_per_oz": "3.1"
        },
        "tea-(herbal)": {
            "name": "Tea (Herbal)",
            "fl_oz": "8",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "tea-(iced)": {
            "name": "Tea (Iced)",
            "fl_oz": "8",
            "totalCaffeine": "47",
            "mg_per_oz": "5.9"
        },
        "tea-(instant)": {
            "name": "Tea (Instant)",
            "fl_oz": "8",
            "totalCaffeine": "40",
            "mg_per_oz": "5.0"
        },
        "tea-(jasmine)": {
            "name": "Tea (Jasmine)",
            "fl_oz": "8",
            "totalCaffeine": "25",
            "mg_per_oz": "3.1"
        },
        "tea-(oolong)": {
            "name": "Tea (Oolong)",
            "fl_oz": "8",
            "totalCaffeine": "37",
            "mg_per_oz": "4.6"
        },
        "tea-(white)": {
            "name": "Tea (White)",
            "fl_oz": "8",
            "totalCaffeine": "28",
            "mg_per_oz": "3.5"
        },
        "teas'-tea-oolong": {
            "name": "Teas' Tea Oolong",
            "fl_oz": "16.9",
            "totalCaffeine": "55",
            "mg_per_oz": "3.3"
        },
        "teavana-tea": {
            "name": "Teavana Tea",
            "fl_oz": "8",
            "totalCaffeine": "41",
            "mg_per_oz": "5.1"
        },
        "teho-energy-drink": {
            "name": "TEHO Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "tejava-iced-tea": {
            "name": "Tejava Iced Tea",
            "fl_oz": "12",
            "totalCaffeine": "50",
            "mg_per_oz": "4.2"
        },
        "tenzing-energy-drink": {
            "name": "TENZING Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "tiger-energy-drink": {
            "name": "Tiger Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "tim-hortons-large-brewed-coffee": {
            "name": "Tim Hortons Large Brewed Coffee",
            "fl_oz": "20",
            "totalCaffeine": "200",
            "mg_per_oz": "10.0"
        },
        "tim-hortons-small-english-toffee-coffee": {
            "name": "Tim Hortons Small English Toffee Coffee",
            "fl_oz": "10",
            "totalCaffeine": "60",
            "mg_per_oz": "6.0"
        },
        "tim-hortons-small-french-vanilla-coffee": {
            "name": "Tim Hortons Small French Vanilla Coffee",
            "fl_oz": "10",
            "totalCaffeine": "60",
            "mg_per_oz": "6.0"
        },
        "tk-diet-cola": {
            "name": "TK Diet Cola",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "tonic-water": {
            "name": "Tonic Water",
            "fl_oz": "11.9",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "topplez-cafe-125": {
            "name": "Topplez Cafe 125",
            "fl_oz": "8",
            "totalCaffeine": "125",
            "mg_per_oz": "15.6"
        },
        "trader-joe's-energy-drink": {
            "name": "Trader Joe's Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "trim-water": {
            "name": "Trim Water",
            "fl_oz": "20",
            "totalCaffeine": "50",
            "mg_per_oz": "2.5"
        },
        "troopfuel-energy-drink": {
            "name": "TroopFuel Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "50",
            "mg_per_oz": "4.2"
        },
        "tropicana-twister-soda": {
            "name": "Tropicana Twister Soda",
            "fl_oz": "20",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "tru-blood-energy-drink": {
            "name": "Tru Blood Energy Drink",
            "fl_oz": "14",
            "totalCaffeine": "50",
            "mg_per_oz": "3.6"
        },
        "trubrain-morning": {
            "name": "TruBrain Morning",
            "fl_oz": "1",
            "totalCaffeine": "80",
            "mg_per_oz": "80.0"
        },
        "truenergy-sport-shot": {
            "name": "TruEnergy Sport Shot",
            "fl_oz": "1.69",
            "totalCaffeine": "100",
            "mg_per_oz": "59.2"
        },
        "truestart-performance-coffee": {
            "name": "TrueStart Performance Coffee",
            "fl_oz": "5.1",
            "totalCaffeine": "95",
            "mg_per_oz": "18.6"
        },
        "tube-shot-energy-shot": {
            "name": "Tube Shot Energy Shot",
            "fl_oz": "0.3",
            "totalCaffeine": "200",
            "mg_per_oz": "666.7"
        },
        "turkey-hill-iced-tea": {
            "name": "Turkey Hill Iced Tea",
            "fl_oz": "16.2",
            "totalCaffeine": "110",
            "mg_per_oz": "6.8"
        },
        "turkish-coffee": {
            "name": "Turkish Coffee",
            "fl_oz": "2",
            "totalCaffeine": "50",
            "mg_per_oz": "25.0"
        },
        "twig-tea-(kukicha)": {
            "name": "Twig Tea (Kukicha)",
            "fl_oz": "8",
            "totalCaffeine": "25",
            "mg_per_oz": "3.1"
        },
        "ubermonster-energy-brew": {
            "name": "Ubermonster Energy Brew",
            "fl_oz": "16.91",
            "totalCaffeine": "160",
            "mg_per_oz": "9.5"
        },
        "uptime-energy-drink": {
            "name": "UPTIME Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "142",
            "mg_per_oz": "11.8"
        },
        "usana-rev3-energy-drink": {
            "name": "USANA Rev3 Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "80",
            "mg_per_oz": "6.7"
        },
        "v-double-espresso-iced-coffee": {
            "name": "V Double Espresso Iced Coffee",
            "fl_oz": "16.07",
            "totalCaffeine": "147",
            "mg_per_oz": "9.1"
        },
        "v-energy-drink": {
            "name": "V Energy Drink",
            "fl_oz": "11.84",
            "totalCaffeine": "109",
            "mg_per_oz": "9.2"
        },
        "v-pocket-rocket-energy-shot": {
            "name": "V Pocket Rocket Energy Shot",
            "fl_oz": "2.03",
            "totalCaffeine": "200",
            "mg_per_oz": "98.5"
        },
        "v8-fusion-energy-drink": {
            "name": "V8 Fusion Energy Drink",
            "fl_oz": "8",
            "totalCaffeine": "80",
            "mg_per_oz": "10.0"
        },
        "vamp-energy-drink": {
            "name": "Vamp Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "240",
            "mg_per_oz": "15.0"
        },
        "vanilla-coke": {
            "name": "Vanilla Coke",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "vanilla-coke-zero": {
            "name": "Vanilla Coke Zero",
            "fl_oz": "12",
            "totalCaffeine": "34",
            "mg_per_oz": "2.8"
        },
        "vegas-fuel-energy-drink": {
            "name": "Vegas Fuel Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "75",
            "mg_per_oz": "8.9"
        },
        "venom-black-mamba": {
            "name": "Venom Black Mamba",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "venom-death-adder": {
            "name": "Venom Death Adder",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "venom-killer-taipan": {
            "name": "Venom Killer Taipan",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "venom-mojave-rattler": {
            "name": "Venom Mojave Rattler",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "vernors-ginger-ale": {
            "name": "Vernors Ginger Ale",
            "fl_oz": "12",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "verve!-energy-drink": {
            "name": "Verve! Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "80",
            "mg_per_oz": "9.6"
        },
        "vidration-enhanced-water": {
            "name": "Vidration Enhanced Water",
            "fl_oz": "20",
            "totalCaffeine": "125",
            "mg_per_oz": "6.2"
        },
        "virtue-energy-water": {
            "name": "Virtue Energy Water",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "viso-energy-drink": {
            "name": "Viso Energy Drink",
            "fl_oz": "20",
            "totalCaffeine": "300",
            "mg_per_oz": "15.0"
        },
        "vita-coco-cafe": {
            "name": "Vita Coco Cafe",
            "fl_oz": "11.1",
            "totalCaffeine": "120",
            "mg_per_oz": "10.8"
        },
        "vital-4u-liquid-energy": {
            "name": "Vital 4U Liquid Energy",
            "fl_oz": "0.5",
            "totalCaffeine": "155",
            "mg_per_oz": "310.0"
        },
        "vital-energy-drink": {
            "name": "Vital Energy Drink",
            "fl_oz": "20",
            "totalCaffeine": "150",
            "mg_per_oz": "7.5"
        },
        "vitaminwater-energy-drink": {
            "name": "VitaminWater Energy Drink",
            "fl_oz": "11.5",
            "totalCaffeine": "80",
            "mg_per_oz": "7.0"
        },
        "vitarain-energy-enhanced-water": {
            "name": "VitaRain Energy Enhanced Water",
            "fl_oz": "20",
            "totalCaffeine": "42",
            "mg_per_oz": "2.1"
        },
        "vixen-energy-drink": {
            "name": "Vixen Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "174",
            "mg_per_oz": "10.9"
        },
        "voltz-energy-shot": {
            "name": "Voltz Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "50",
            "mg_per_oz": "25.0"
        },
        "vuka-functional-drinks": {
            "name": "Vuka Functional Drinks",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "warrior-energy-drink": {
            "name": "Warrior Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "160",
            "mg_per_oz": "10.0"
        },
        "water-joe": {
            "name": "Water Joe",
            "fl_oz": "20",
            "totalCaffeine": "70",
            "mg_per_oz": "3.5"
        },
        "wendy's-iced-tea": {
            "name": "Wendy's Iced Tea",
            "fl_oz": "16",
            "totalCaffeine": "32",
            "mg_per_oz": "2.0"
        },
        "whey-up-energy-drink": {
            "name": "Whey Up Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "150",
            "mg_per_oz": "9.4"
        },
        "white-tiger": {
            "name": "White Tiger",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "whoop-ass-energy-drink": {
            "name": "Whoop Ass Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "wicked-energy-drink": {
            "name": "Wicked Energy Drink",
            "fl_oz": "16.9",
            "totalCaffeine": "155",
            "mg_per_oz": "9.2"
        },
        "wicked-hammer-energy": {
            "name": "Wicked Hammer Energy",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "wild-cherry-pepsi": {
            "name": "Wild Cherry Pepsi",
            "fl_oz": "12",
            "totalCaffeine": "38",
            "mg_per_oz": "3.2"
        },
        "wildcat-energy-drink": {
            "name": "Wildcat Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "winrgy-energy-drink": {
            "name": "Winrgy Energy Drink",
            "fl_oz": "6.77",
            "totalCaffeine": "90",
            "mg_per_oz": "13.3"
        },
        "wired-x-3000-energy-drink": {
            "name": "Wired X 3000 Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "188",
            "mg_per_oz": "11.8"
        },
        "wired-x-berry-rush": {
            "name": "Wired X Berry Rush",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "wired-x344-energy-drink": {
            "name": "Wired X344 Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "344",
            "mg_per_oz": "21.5"
        },
        "wolfshot-hemp-energy-shot": {
            "name": "Wolfshot Hemp Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "180",
            "mg_per_oz": "90.0"
        },
        "worx-energy-shot": {
            "name": "Worx Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "160",
            "mg_per_oz": "80.0"
        },
        "x-ray-energy-drink": {
            "name": "X Ray Energy Drink",
            "fl_oz": "8.46",
            "totalCaffeine": "79",
            "mg_per_oz": "9.3"
        },
        "x-mode-energy-shot": {
            "name": "X-Mode Energy Shot",
            "fl_oz": "1",
            "totalCaffeine": "150",
            "mg_per_oz": "150.0"
        },
        "xapp-protein-energy-drink": {
            "name": "XAPP Protein Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "93",
            "mg_per_oz": "5.8"
        },
        "xingtea-flavored-tea": {
            "name": "Xingtea Flavored Tea",
            "fl_oz": "23.5",
            "totalCaffeine": "35",
            "mg_per_oz": "1.5"
        },
        "xingtea-green-tea-energy": {
            "name": "Xingtea Green Tea Energy",
            "fl_oz": "23.5",
            "totalCaffeine": "155",
            "mg_per_oz": "6.6"
        },
        "xingtea-just-plain-tea": {
            "name": "Xingtea Just Plain Tea",
            "fl_oz": "23.5",
            "totalCaffeine": "75",
            "mg_per_oz": "3.2"
        },
        "xl-energy-drink": {
            "name": "XL Energy Drink",
            "fl_oz": "8.3",
            "totalCaffeine": "80",
            "mg_per_oz": "9.6"
        },
        "xo-energy-drink": {
            "name": "XO Energy Drink",
            "fl_oz": "5.07",
            "totalCaffeine": "50",
            "mg_per_oz": "9.9"
        },
        "xs-energy-drink": {
            "name": "XS Energy Drink",
            "fl_oz": "8.4",
            "totalCaffeine": "80",
            "mg_per_oz": "9.5"
        },
        "xtazy-energy-drink": {
            "name": "Xtazy Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "180",
            "mg_per_oz": "15.0"
        },
        "xtreme-shock-energy-drink": {
            "name": "Xtreme Shock Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "200",
            "mg_per_oz": "16.7"
        },
        "xyience-energy-drink": {
            "name": "Xyience Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "176",
            "mg_per_oz": "11.0"
        },
        "y.e.s.-energy-shot": {
            "name": "Y.E.S. Energy Shot",
            "fl_oz": "2",
            "totalCaffeine": "180",
            "mg_per_oz": "90.0"
        },
        "yellow-tea": {
            "name": "Yellow Tea",
            "fl_oz": "8",
            "totalCaffeine": "33",
            "mg_per_oz": "4.1"
        },
        "yerba-mate-tea": {
            "name": "Yerba Mate Tea",
            "fl_oz": "8",
            "totalCaffeine": "85",
            "mg_per_oz": "10.6"
        },
        "yoo-hoo-chocolate-drink": {
            "name": "Yoo-Hoo Chocolate Drink",
            "fl_oz": "8",
            "totalCaffeine": "0",
            "mg_per_oz": "0.0"
        },
        "zest-highly-caffeinated-tea": {
            "name": "Zest Highly Caffeinated Tea",
            "fl_oz": "8",
            "totalCaffeine": "150",
            "mg_per_oz": "18.8"
        },
        "zevia-cola": {
            "name": "Zevia Cola",
            "fl_oz": "12",
            "totalCaffeine": "45",
            "mg_per_oz": "3.8"
        },
        "zevia-energy-drink": {
            "name": "Zevia Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "zija-xm+-energy-drink": {
            "name": "Zija XM+ Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "200",
            "mg_per_oz": "16.7"
        },
        "zipfizz-energy-drink": {
            "name": "ZipFizz Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "100",
            "mg_per_oz": "6.2"
        },
        "zizzazz-energy-drink": {
            "name": "ZizZazz Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        },
        "zola-coconut-water-espresso": {
            "name": "Zola Coconut Water Espresso",
            "fl_oz": "17.5",
            "totalCaffeine": "125",
            "mg_per_oz": "7.1"
        },
        "zola-organic-hydrating-energy-drink": {
            "name": "Zola Organic Hydrating Energy Drink",
            "fl_oz": "12",
            "totalCaffeine": "120",
            "mg_per_oz": "10.0"
        },
        "zombie-blood-energy-potion": {
            "name": "Zombie Blood Energy Potion",
            "fl_oz": "3.4",
            "totalCaffeine": "80",
            "mg_per_oz": "23.5"
        },
        "zum-xr-energy-drink": {
            "name": "ZUM XR Energy Drink",
            "fl_oz": "16",
            "totalCaffeine": "200",
            "mg_per_oz": "12.5"
        }
    }
]

var searchBar = document.querySelector("#beverageInput");
var amountDisplay = document.querySelector("#caffeine-amount");
processMap();
$(document).ready(function() {
    autocompleteForm();
})

function autocompleteForm() {
    var options = {
        url: "caffeineInfo.json",
        getValue:function(element) {
            return element.name;
        },
        maxNumberOfElements: 15,
        list: {
            match: {
                enabled: true
            }
        },
        placeholder: "Enter your drink here"
      };
      
      $("#beverageInput").easyAutocomplete(options);
}
function processMap() {
    Object.keys(caffeineMap[0]).forEach(function(key) {
        caffeineInfo.push(caffeineMap[0][key]);
    })
    json = JSON.stringify(caffeineInfo);
}
function getCaffeine(drink) {
  for (var i = 0; i < caffeineInfo.length; i++){
    if (caffeineInfo[i]['name'] === drink){
      return caffeineInfo[i]['totalCaffeine'];
    }
  }
  return "0";
}

function search(){
    var amountString = getCaffeine(document.querySelector("#beverageInput").value);
    document.querySelector("#caffeine-amount").innerHTML = amountString;

    $.each($(".addable, .addable-glow"), function(i, element){
        if (amountString != "0" && !element.classList.contains("readyToAdd"))
            element.classList.add("readyToAdd");
        else if (amountString === "0" && element.classList.contains("readyToAdd"))
            element.classList.remove("readyToAdd");
    });
}
