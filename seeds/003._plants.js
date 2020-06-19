exports.seed = function(knex) {
    
    return knex('users').select().then(users => {
        console.log(users);
        return knex('plants').insert([
            { name: 'Haworthia Pentagona', nickname: 'Lucky bamboo', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://queengenetics.dk/media/dxffgl1u/haworthia-pentagona-10-5-cm.jpg?anchor=center&mode=crop&width=800&height=800&metadata=false&rnd=132146607729670000', category_id: 2, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Monstera Deliciosa', nickname: 'Split-Leaf Philodendron', watering: 'Water when soil surface dries.', humidity: '', fertalizing: 'Fertilize every 1 to 2 months.', temperature: '', lighting: 'Medium to bright light.', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://www.ikea.com/sg/en/images/products/monstera-deliciosa-potted-plant__0554567_PE659828_S5.JPG', category_id: 3, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Coffea arabica', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://onlinebabyplants.com/wp-content/uploads/2020/03/Coffea-Arabica-M-pot-2.jpg', category_id: 2,  user_id: users.find(user => user.username == 'admin').id },
            { name: 'Phalaenopsis', nickname: 'Moth Orchid', watering: 'Water about once a week when bark chips are dry.', humidity: 'Can tolerate the dry air of our interiors and still bloom.', fertalizing: 'Fertilize monthly, except during flowering.', temperature: '', lighting: 'Bright light.', soil: 'Bark chips or pumice with added vermicompost.', pruning: '', picture: 'https://secure.img1-ag.wfcdn.com/im/99249663/compr-r85/7462/74623221/phalaenopsis-orchids-floral-arrangement-in-pot.jpg', category_id: 4,  user_id: users.find(user => user.username == 'admin').id },
            { name: 'Peperomia', nickname: 'Radiator Plant', watering: 'Water when soil surface dries.', humidity: '', fertalizing: 'Fertilize every 2 months.', temperature: '', lighting: 'Low to medium light.', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://i.pinimg.com/originals/92/eb/d9/92ebd982dd8ae006757ecd3d9954345b.png', category_id: 2, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Ficus microcarpa Ginseng', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://www.ikea.com/dk/da/images/products/ficus-microcarpa-ginseng-potted-plant-with-pot-bonsai-assorted-colours__0804137_PE769078_S5.JPG?f=xxxl', category_id: 2, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Ficus benjamina', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://www.ikea.com/dk/da/images/products/ficus-benjamina-natasja--potted-plant-weeping-fig__0653996_PE708225_S5.JPG?f=s', category_id: 3, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Dracaena sanderiana', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://img.pixers.pics/pho_wat(s3:700/FO/33/61/99/02/700_FO33619902_1db90aaf90d2145c7c9df2c7bdebe2a3.jpg,467,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,247,650,jpg)/fototapeter-lucky-bamboo-plant-dracaena-sanderiana.jpg.jpg', category_id: 3, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Dracaena fragrans `Massangeana’', nickname: 'Corn Plant', watering: 'Water when top 2 inches of soil are dry. Tolerating some drying out.', humidity: '', fertalizing: 'Fertilize every 2 to 3 months.', temperature: '', lighting: 'Low to medium light.', soil: 'Well-draining soil.', pruning: '', picture: 'https://cdn.shopify.com/s/files/1/1714/1265/products/il_fullxfull.1393225712_dmj6_11fa4ce5-cd99-4ab0-921c-09f36b0f7b2f_720x.jpg?v=1523076587', category_id: 5, user_id: users.find(user => user.username == 'admin').id },
            { name: 'my plant', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: '', category_id: 4, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Dieffenbachia', nickname: 'Dumb Cane', watering: 'Only when the soil is approaching dryness. Soggy soil will quickly lead to root rot.', humidity: 'Moist, fx. keep in bright bathroom.', fertalizing: 'Feed dumbcane every other month with an organic houseplant food. Be careful not to overfertilize.', temperature: 'Warm', lighting: 'Medium light', soil: '', pruning: '', picture: 'https://www.houseplantsexpert.com/image-files/dumb_cane_plant.jpg', category_id: 5, user_id: users.find(user => user.username == 'admin').id },
            { name: 'African Violet', nickname: '', watering: 'Keep evenly moist.', humidity: '', fertalizing: ' Fertilize every 2 months.', temperature: '', lighting: 'Filtered light - bright Northern exposure.', soil: 'Rich, acidic, well-draining,', pruning: '', picture: 'https://selectivegardener.com/images/products/3401.png', category_id: 4, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Aloe Vera', nickname: '', watering: 'Water only when dry.', humidity: '', fertalizing: 'Fertilize quarterly spring-fall.', temperature: '', lighting: 'Bright light—full sun.', soil: 'Light, well-draining soil.', pruning: '', picture: 'https://www.healthyhouseplants.com/images/aloe-vera-plant.jpg', category_id: 2, user_id: users.find(user => user.username == 'admin').id },
            { name: 'Syngonium podophyllum', nickname: 'Arrowhead Vine', watering: 'Water when soil surface dries.', humidity: '', fertalizing: 'Fertilize every 2 to 3 months.', temperature: '', lighting: 'Low to medium light. Keep away from bright light, as it will yellow and leaves will burn. ', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://www.healthyhouseplants.com/images/arrowhead-vine-plant.jpg', category_id: 1, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Coleus x hybridus', nickname: '', watering: 'Keep soil evenly moist.', humidity: '', fertalizing: 'Fertilize monthly spring through fall.', temperature: '', lighting: 'Bright filtered sun.', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://www.healthyhouseplants.com/images/coleus-plant.jpg', category_id: 5, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Aspidistra elatior "Okame"', nickname: 'Okame Striped Cast Iron Plant', watering: 'Water when soil surfaces dries. It can withstand some neglect.', humidity: '', fertalizing: 'Fertilize every 3 to 4 months.', temperature: '', lighting: 'Filtered, indirect sun.  It can withstand low light.', soil: 'Well-draining soil.', pruning: '', picture: 'http://www.johnjearrard.co.uk/plants/aspidistra/aspidistraelatiorvariegata/aspidistraelatiorvariegata271108.jpg', category_id: 5, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Ficus Pumila', nickname: 'Creeping Fig', watering: 'Keep soil evenly moist.', humidity: '', fertalizing: 'Fertilize every 1 to 2 months.', temperature: '', lighting: 'Medium to bright light.', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://www.healthyhouseplants.com/images/creeping-fig-plant.jpg', category_id: 1, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Calathea zebrina', nickname: 'Peacock Plant', watering: 'Keep soil evenly moist.', humidity: '', fertalizing: 'Fertilize monthly.', temperature: '', lighting: 'Medium to bright light.', soil: 'Rich, well-draining soil.', pruning: '', picture: '', category_id: 5, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Clusia', nickname: '', watering: '', humidity: '', fertalizing: '', temperature: '', lighting: '', soil: '', pruning: '', picture: 'https://www.ikea.com/dk/da/images/products/clusia-potted-plant__0653977_PE708206_S5.JPG?f=xxxl', category_id: 2, user_id: users.find(user => user.username == 'user1').id },
            { name: 'Hypoestes phyllostachya', nickname: 'Polka-Dot Plant', watering: 'Water when soil surface dries.', humidity: '', fertalizing: 'Fertilize every 2 months.', temperature: '', lighting: 'Medium to bright light.', soil: 'Rich, well-draining soil.', pruning: '', picture: 'https://www.healthyhouseplants.com/images/polka-dot-plant.jpg', category_id: 5, user_id: users.find(user => user.username == 'user1').id }, 
        ]);
    });

};