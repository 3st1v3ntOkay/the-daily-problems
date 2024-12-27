class Twitter {
  #count: number = 0;
  // #followMap: Record<number, Set<number>> = {};
  #followMap: Map<number, Set<number>> = new Map();
  // #tweetMap: Record<number, number[][]> = {};
  #tweetMap: Map<number, number[][]> = new Map();

  constructor() {
    this.#tweetMap = new Map();
    // this.#tweetMap = {};
    this.#followMap = new Map();
    // this.#followMap = {};
  }

  postTweet(userId: number, tweetId: number): void {
    /*
      if (!this.#tweetMap[userId]) {
      // this.#tweetMap[userId].push([]);
      this.#tweetMap[userId] = [];
    }

    this.#tweetMap[userId].push([tweetId, this.#count]);
    */

    if (!this.#tweetMap.get(userId)) {
      this.#tweetMap.set(userId, []);
    }

    this.#tweetMap.get(userId)?.push([tweetId, this.#count]);

    this.#count++;
  }

  getNewsFeed(userId: number): number[] {
    /*
    const allFollowers = this.#followMap[userId] || new Set();
    allFollowers.add(userId);
    
    const tenMostRecentTweetsOfAllUsers: number[][] = [];
    
    for (let follower of Array.from(allFollowers)) {
      const tweets = this.#tweetMap[follower]?.slice(-10) || [];
      
      tenMostRecentTweetsOfAllUsers.push(...tweets);
    }
    */

    const allFollowers = this.#followMap.get(userId) || new Set();
    allFollowers.add(userId);

    const tenMostRecentTweetsOfAllUsers: number[][] = [];

    for (let follower of Array.from(allFollowers)) {
      const tweets = this.#tweetMap.get(follower)?.slice(-10) || [];

      tenMostRecentTweetsOfAllUsers.push(...tweets);
    }

    tenMostRecentTweetsOfAllUsers.sort((a: number[], b: number[]) => b[1] - a[1]);

    return tenMostRecentTweetsOfAllUsers.slice(0, 10).map((item) => item[0]);
  }

  follow(followerId: number, followeeId: number): void {
    /*
      if (!this.#followMap[followerId]) {
        this.#followMap[followerId] = new Set();
      }
      
      this.#followMap[followerId].add(followeeId);
    */

    if (!this.#followMap.get(followerId)) {
      this.#followMap.set(followeeId, new Set());
    }

    this.#followMap.get(followerId)?.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    /*
    if (!this.#followMap[followerId]) {
      return;
    }
    if (!this.#followMap[followerId].has(followeeId)) {
      return;
    }
    
    this.#followMap[followerId].delete(followeeId);
    */

    if (!this.#followMap.get(followerId)) {
      return;
    }
    if (!this.#followMap.get(followerId)?.has(followeeId)) {
      return;
    }

    this.#followMap.get(followerId)?.delete(followeeId);
  }
}

/**
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/