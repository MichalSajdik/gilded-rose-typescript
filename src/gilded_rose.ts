export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class Shop {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    isSulfuras(name: string) {
        return name === 'Sulfuras, Hand of Ragnaros';
    }

    isAgedBrie(name: string) {
        return name === 'Aged Brie';
    }

    isBackstagePasses(name: string) {
        return name === 'Backstage passes to a TAFKAL80ETC concert';
    }

    canIncreaseQuality(quality: number) {
        return quality < 50
    }

    isSpoiled(sellIn: number) {
        return sellIn <= 0
    }

    isRegularProduct(name: string) {
        return !this.isAgedBrie(name) && !this.isBackstagePasses(name)
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.isSulfuras(this.items[i].name)) {
                continue;
            }

            if (this.isAgedBrie(this.items[i].name)) {
                if (this.canIncreaseQuality(this.items[i].quality)) {
                    this.items[i].quality += 1;
                }

                if (this.canIncreaseQuality((this.items[i].quality)) && this.isSpoiled(this.items[i].sellIn)) {
                    this.items[i].quality += 1;
                }
            }

            if (this.isBackstagePasses(this.items[i].name)) {
                if (this.canIncreaseQuality(this.items[i].quality)) {
                    this.items[i].quality += 1;
                    if (this.items[i].sellIn < 11) {
                        if (this.canIncreaseQuality(this.items[i].quality)) {
                            this.items[i].quality += 1;
                        }
                    }
                    if (this.items[i].sellIn < 6) {
                        if (this.canIncreaseQuality(this.items[i].quality)) {
                            this.items[i].quality += 1;
                        }
                    }
                }

                if (this.isSpoiled(this.items[i].sellIn)) {
                    this.items[i].quality = 0;
                }
            }

            if (this.isRegularProduct(this.items[i].name)) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality -= 1;
                }

                if (this.isSpoiled(this.items[i].sellIn)) {
                    if (this.items[i].quality > 0) {
                        this.items[i].quality -= 1;
                    }
                }
            }
            this.items[i].sellIn -= 1;
        }

        return this.items;
    }
}
