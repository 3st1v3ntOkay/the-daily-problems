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
export enum Gift {
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
