var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cart', { useUnifiedTopology: true, useNewUrlParser: true});

var products = [
		new Product({
			imagePath: '/images/book2.jpg',
			title: 'Harry Potter Book: Goblet of Fire',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus quia nobis, perspiciatis sequi tenetur repudiandae dicta iure.',
			price: 10
		}),
		new Product({
			imagePath: '/images/book3.jpg',
			title: 'Windmill of the Gods: Sidney Sheldon',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus quia nobis, perspiciatis sequi tenetur repudiandae dicta iure.',
			price: 20
		}),
		new Product({
			imagePath: '/images/book4.jpg',
			title: 'A song of Fire and Ice: Goerge R.R. Martin',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus quia nobis, perspiciatis sequi tenetur repudiandae dicta iure.',
			price: 30
		}),
		new Product({
			imagePath: '/images/book1.jpg',
			title: 'Harry Potter Book: Half Blood Prince',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus quia nobis, perspiciatis sequi tenetur repudiandae dicta iure.',
			price: 40
		}),
		new Product({
			imagePath: '/images/book5.jpg',
			title: 'A storm of swords: Goerge R.R. Martin',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus quia nobis, perspiciatis sequi tenetur repudiandae dicta iure.',
			price: 50
		})
];

for (var i = 0, done=0; i < products.length; i++) {
	products[i].save(function (err, result) {
		done++;
		if(done == products.length)
			mongoose.disconnect();
	});
}