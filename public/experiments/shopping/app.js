(function () {
    var app = angular.module("store", []);

    app.controller("StoreController", StoreController);
    app.controller("PanelController", PanelController);
    function StoreController() {
        this.products = gems;
    }

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: 'product 1',
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                }, {
                    full: 'dodecahedron-02-full.jpg',
                    thumb: 'dodecahedron-02-thumb.jpg'
                }
            ],
            canPurchase: true,
            soldOut: true
        },
        {
            name: "Pentagonal Gem",
            price: 3,
            description: 'product 2',
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Dodecahedron",
            price: 5.95,
            description: 'product 3',
            canPurchase: false,
            soldOut: false
        }
    ];

    function PanelController(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        }
        this.isSelected =  function(checkTab) {
            return this.tab === checkTab;
        }
    }

})();