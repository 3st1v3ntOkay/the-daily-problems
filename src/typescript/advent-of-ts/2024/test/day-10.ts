// my attemp
enum GiftTest {
  Coal = 0,
  Train = 1,
  Bicycle = 2,
  SuccessorToTheNintendoSwitch = 4,
  TikTokPremium = 8,
  Vape = 16,
  Traditional = GiftTest.Train | GiftTest.Bicycle, // is this doing a sum?
  OnTheMove = GiftTest.Coal | GiftTest.Bicycle | GiftTest.TikTokPremium | GiftTest.Vape,
  OnTheCouch = GiftTest.OnTheMove | GiftTest.Bicycle | GiftTest.SuccessorToTheNintendoSwitch,
}

// thanks to @FuzeTox: https://www.youtube.com/@FuzeTox
enum Gift {
  Coal,
  Train,
  Bicycle,
  Traditional,
  SuccessorToTheNintendoSwitch,
  TikTokPremium = SuccessorToTheNintendoSwitch * 2,
  Vape = TikTokPremium * 2,
  OnTheMove = Bicycle * 13,
  OnTheCouch = Bicycle * 14,
}

const test = <F extends Gift>(flag: F) => flag;

test<Gift.Coal>(0);
test<Gift.Train>(1);
test<Gift.Bicycle>(2);
test<Gift.SuccessorToTheNintendoSwitch>(4);
test<Gift.TikTokPremium>(8);
test<Gift.Vape>(16);
test<Gift.Traditional>(3);
test<Gift.OnTheMove>(26);
test<Gift.OnTheCouch>(28);

// @ts-expect-error
test<Gift.Coal>(10);
// @ts-expect-error
test<Gift.Train>(11);
// @ts-expect-error
test<Gift.Bicycle>(12);
// @ts-expect-error
test<Gift.SuccessorToTheNintendoSwitch>(14);
// @ts-expect-error
test<Gift.TikTokPremium>(18);
// @ts-expect-error
test<Gift.Vape>(116);
// @ts-expect-error
test<Gift.Traditional>(13);
// @ts-expect-error
test<Gift.OnTheMove>(126);
// @ts-expect-error
test<Gift.OnTheCouch>(124);
