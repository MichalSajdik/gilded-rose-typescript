import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("should work with empty shop", () => {
        const gildedRose = new Shop();
        const items = gildedRose.updateQuality();
        expect(items.length).toEqual(0);
    });

    describe("Regular product", () => {
        it("should decrease quality and sellIn of all items by 1", () => {
            const gildedRose = new Shop([
                new Item("foo", 3, 4),
                new Item("foo2", 4, 4)
            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("foo");
            expect(items[0].quality).toEqual(3);
            expect(items[0].sellIn).toEqual(2)

            expect(items[1].name).toEqual("foo2");
            expect(items[1].quality).toEqual(3);
            expect(items[1].sellIn).toEqual(3);
        });

        it("should decrease quality by 2 when sellIn is 0", () => {
            const gildedRose = new Shop([new Item("foo", 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(8);
            expect(items[0].sellIn).toEqual(-1)
        });

        it("should not decrease quality when quality is 0", () => {
            const gildedRose = new Shop([new Item("foo", 0, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1)
        });

        it("should not decrease quality under 0, when quality is 1 and sellIn is 0", () => {
            const gildedRose = new Shop([new Item("foo", 0, 1)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1)
        });

    });

    describe("Backstage passes to a TAFKAL80ETC concert", () => {

        it("should increase in quality by 3", () => {
            const gildedRose = new Shop([
                new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10),
            ]);
            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].quality).toEqual(13);
            expect(items[0].sellIn).toEqual(0)

        });

        it("should increase in quality by 2", () => {
            const gildedRose = new Shop([
                new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10),
            ]);
            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].quality).toEqual(12);
            expect(items[0].sellIn).toEqual(5);

        });

        it("should increase in quality by 1", () => {
            const gildedRose = new Shop([
                new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),

            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].quality).toEqual(11);
            expect(items[0].sellIn).toEqual(10);
        });

        it("should set quality to 0 when sellIn is 0", () => {
            const gildedRose = new Shop([
                new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),

            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });

        it("should not increase in quality, when quality is 50", () => {
            const gildedRose = new Shop([
                new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)

            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
            expect(items[0].quality).toEqual(50);
        });

    });

    describe("Aged Brie", () => {
        it("should increase in quality by 1", () => {
            const gildedRose = new Shop([
                new Item("Aged Brie", 1, 10)

            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].quality).toEqual(11);
            expect(items[0].sellIn).toEqual(0);
        });

        it("should increase in quality by 2 when sellIn is 0", () => {
            const gildedRose = new Shop([
                new Item("Aged Brie", 0, 10)

            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].quality).toEqual(12); //12
            expect(items[0].sellIn).toEqual(-1);
        });

        it("should not increase in quality, when quality is 50", () => {
            const gildedRose = new Shop([
                new Item("Aged Brie", 0, 50)
            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Aged Brie");
            expect(items[0].quality).toEqual(50);
        });
    });

    describe("Sulfuras", () => {
        it("should not change the quality", () => {
            const gildedRose = new Shop([
                new Item("Sulfuras, Hand of Ragnaros", 0, 80)
            ]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
            expect(items[0].quality).toEqual(80);
            expect(items[0].sellIn).toEqual(0);
        });
    })

});
