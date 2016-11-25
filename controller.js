/**
 * Created by JENN on 11/20/2016.
 */
angular.module('myApp', []).controller('mainController', function ($scope) {
    $scope.title = "Animal Kingdom";
    $scope.animals = [
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Mammalia',
            Order: 'Carnivora',
            Family: 'Felidae',
            Genus: 'Acinonyx',
            Species: 'A. jubatus'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Mammalia',
            Order: 'Carnivora',
            Family: 'Canidae',
            Genus: 'Canis',
            Species: 'C. lupus'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Aves',
            Order: 'Strigiformes',
            Family: 'Strigidae',
            Genus: 'Bubo',
            Species: 'B. scandiacus'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Mammalia',
            Order: 'Artiodactyla',
            Family: 'Delphinidae',
            Genus: 'Steno',
            Species: 'S. bredanensis'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Mammalia',
            Order: 'Artiodactyla',
            Family: 'Balaenopteridae',
            Genus: 'Megaptera',
            Species: 'M. novaeangliae'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Reptilia',
            Order: 'Squamata',
            Family: 'Iguanidae',
            Genus: 'Iguana',
            Species: 'I. iguana'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Reptilia',
            Order: 'Squamata',
            Family: 'Boidae',
            Genus: 'Corallus',
            Species: 'C. caninus'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Arthropoda',
            Class: 'Arachnida',
            Order: 'Araneae',
            Family: 'Theraphosidae',
            Genus: 'Avicularia',
            Species: 'A. affinis'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Arthropoda',
            Class: 'Arachnida',
            Order: 'Araneae',
            Family: 'Theridiidae',
            Genus: 'Latrodectus',
            Species: 'L. hesperus'
        },
        {
            Kingdom: 'Animalia',
            Phylum: 'Chordata',
            Class: 'Chondrichthyes',
            Order: 'Lamniformes',
            Family: 'Lamnidae',
            Genus: 'Carcharodon',
            Species: 'C. carcharias'
        }
    ];
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }

});