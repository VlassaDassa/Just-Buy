// myProducts.js
import { observable, makeAutoObservable, computed } from 'mobx';

class myProductsStore {
    products = [];
    selectedCategory = observable.array(['Всё']);
    selectedSortType = 'all';
    groupCategory = {}

    constructor() {
        makeAutoObservable(this, {
            products: observable,
            selectedCategory: observable,
            selectedSortType: observable,
            groupCategory: observable,
            setGroupCategory: true,
            setProducts: true,
            setSelectedCategory: true,
            setSortType: true,
            filteredProducts: computed,
            uniqueCategories: computed,
        });
        this.setProducts([]);
        this.setSelectedCategory(this.uniqueCategories);
        this.setGroupCategory();
    }

    setProducts = async (products) => {
    this.products = products.map(product => ({...product, successful: Math.round(Math.random() * 5), best_selling: Math.round(Math.random() * 5)}));
        await this.setSelectedCategory(['Всё'])
        this.setGroupCategory()
    }

    selectedSortType = 'all';

    setSortType = (sortType) => {
        this.selectedSortType = sortType
        this.sortProducts()
        }

    setGroupCategory() {
        const newGroup = {}
        this.products.forEach(product => {
            const productByCategory = product.subcategory
            if (!newGroup[productByCategory]) {
                newGroup[productByCategory] = []
            }
            newGroup[productByCategory].push(product)
        })
        this.groupCategory = newGroup
    }

    sortProducts = () => {
        const {selectedSortType, products} = this
        switch (selectedSortType) {
            case 'successful':
                return [...products].sort((a, b) => b.successful - a.successful)
            case 'best_selling':
                return [...products].sort((a,b) => b.best_selling - a.best_selling)
            case 'all':
                return [...products]
            default:
                console.error('Invalid sortType:', selectedSortType)
                return [...products]
                            }
    }

    get uniqueCategories() {
        const categories = new Set(this.products.map((product) => product.subcategory))
        return [...categories]
    }

    selectedCategory = this.uniqueCategories;
    
    setSelectedCategory = (category) => {
        if (Array.isArray(category)) {
            this.selectedCategory.replace(category);
        } else if (typeof category === 'function') {
            this.selectedCategory.replace(category(this.selectedCategory.slice()));
        } else {
            console.error('Invalid category', typeof category, category);
        }
    }

}

export default new myProductsStore();
