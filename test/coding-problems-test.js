const {expect, assert} = require('chai');
const {sumArray, sumFirstThree, tripledPlusFive, secondHighest, doubles, indexMap, evenNumStrs, eeee, oddsCount, reversed, firstAndLast, Song, Album} = require('../coding-problems');

describe('JavaScript fundamentals final:', () => {
  it('sumArray()', () => {
    var test1 = sumArray([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);
    var test2 = sumArray([10, 'cat', 20, null, 30, [], 40]);
    var test3 = sumArray([10, 'bear', -20, 'dog', 30, true, -40]);
    expect(test1).equal(10);
    expect(test2).equal(100);
    expect(test3).equal(-20);
  });
  it('sumFirstThree()', () => {
    var test1 = sumFirstThree(1, 2, 3, 4);
    var test2 = sumFirstThree(10, 10, 10, 10);
    var test3 = sumFirstThree(10, 20, 30, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    expect(test1).equal(6);
    expect(test2).equal(30);
    expect(test3).equal(60);
  });
  it('tripledPlusFive()', () => {
    var test1 = tripledPlusFive([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);
    var test2 = tripledPlusFive([10, 10, 10]);
    expect(test1).eql([8, 11, 14, 17]);
    expect(test2).eql([35, 35, 35]);
  });
  it('secondHighest()', () => {
    var test1 = secondHighest([1, 2, 3, 4, 5]);
    var test2 = secondHighest([-10, 20, 300, 44, 50]);
    var test3 = secondHighest([-1000, 0, 1000]);
    expect(test1).eql(4);
    expect(test2).eql(50);
    expect(test3).eql(0);
  });
  it('indexMap() ', () => {
    var test1 = indexMap([10, 30, 20, 40, 100]);
    var test2 = indexMap([1, 2, 3, 4, 5]);
    var test3 = indexMap([10, 33, -10]);
    expect(test1).eql([0, 30, 40, 120, 400]);
    expect(test2).eql([0, 2, 6, 12, 20]);
    expect(test3).eql([0, 33, -20]);
  });
  it('evenNumStrs() ', () => {
    var test1 = evenNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]);
    var test2 = evenNumStrs([3, 18, 'goodbye', 23, 'yo', 'cya', 99, 'heya']);
    expect(test1).eql(['hi']);
    expect(test2).eql(['yo', 'heya']);
  });
  it('doubles() ', () => {
    var test1 = doubles([100, 100, 100, 100]);
    var test2 = doubles([50, 40, 33, 6, 12]);
    expect(test1).eql([200, 200, 200, 200, 200, 200, 200, 200, 200, 200]);
    expect(test2).eql([100, 80, 66, 12, 24, 100, 80, 66, 12, 24]);
  });
  it('eeee() ', () => {
    var test1 = eeee('watermelon');
    var test2 = eeee('hellooooo');
    expect(test1).eql('eeeeeeeeee');
    expect(test2).eql('eeeeeeeee');
  });
  it('Song()', () => {
    var test1 = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996);
    var test2 = test1.play();
    var test3 = new Song('Rufus Du Sol', 'Bloom', 2016);
    var test4 = test3.play();
    expect(test1.artist).eql('The Baha Men');
    expect(test2).eql('Now playing Who Let The Dogs Out? by The Baha Men');
    assert.property(test1, 'play');
    expect(test3.title).eql('Bloom');
    expect(test4).eql('Now playing Bloom by Rufus Du Sol');
  });
  it('Album()', () => {
    var test1 = new Album('Childish Gambino', 'Awaken, My Love!', 2016);
    test1.addSong(new Song('Childish Gambino', 'Me and Your Mama', 2016));
    test1.addSong(new Song('Childish Gambino', 'Redbone', 2016));
    test1.addSong(new Song('Childish Gambino', 'The Night Me and Your Mama Met', 2016));
    assert.property(test1, 'addSong');
    assert.property(test1, 'tracklist');
    var test2 = test1.tracklist();
    expect(test1.artist).eql('Childish Gambino');
    expect(test2).eql("Me and Your Mama, Redbone, The Night Me and Your Mama Met");
  });
  it('oddsCount() ', () => {
    var test1 = oddsCount([1, 2, 3, 4, 5]);
    var test2 = oddsCount([1, 1, 1, 1, 1, 2, 2, 2]);
    expect(test1).eql({odds: 3);
    expect(test2).eql({odds: 5});
  });
  it('reversed() ', () => {
    var test1 = reversed([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
    var test2 = reversed([6, 7, 1, 22, 4], [4, 22, 1, 7, 6]);
    var test3 = reversed([1, 2, 3, 4, 5], [3, 4, 5, 2, 1]);
    var test4 = reversed([1, 2, 3], [1, 2, 3]);
    expect(test1).eql(true);
    expect(test1).eql(true);
    expect(test2).eql(false);
    expect(test2).eql(false);
  });
  it('firstAndLast() ', () => {
    var test1 = firstAndLast('cart', 'cataract');
    var test2 = firstAndLast('dog', 'bog');
    var test3 = firstAndLast('watermelon', 'warn');
    var test4 = firstAndLast('flashlight', 'flood');
    expect(test1).equal(true);
    expect(test2).equal(false);
    expect(test3).equal(true);
    expect(test4).equal(false);
  });
});
