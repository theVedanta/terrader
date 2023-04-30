// So my thinking is to create a player class that will hold all the information about the player
// and then create a player object that will be used to create the player once we log in.

// Player class
class Player {
    constructor(name, id, level, carbon_credits, high_score, carbon_score, power_ups, badges, friends){
        this.name = name;
        this.id = id;
        this.level = level;
        this.carbon_credits = carbon_credits;
        this.high_score = high_score;
        this.carbon_score = carbon_score;
        this.power_ups = power_ups;
        this.badges = badges;
        this.friends = friends;
    }
    // Need to write getters and setters for all attributes:
    // name
    // id
    // level
    // carbon_credits
    // high_score
    // carbon_score
    // power_ups
    // badges
    // friends
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getLevel(){
        return this.level;
    }
    setLevel(level){
        this.level = level;
    }
    getCarbonCredits(){
        return this.carbon_credits;
    }
    setCarbonCredits(carbon_credits){
        this.carbon_credits = carbon_credits;
    }
    getHighScore(){
        return this.high_score;
    }
    setHighScore(high_score){
        this.high_score = high_score;
    }
    getCarbonScore(){
        return this.carbon_score;
    }
    setCarbonScore(carbon_score){
        this.carbon_score = carbon_score;
    }
    getPowerUps(){
        return this.power_ups;
    }
    setPowerUps(power_ups){
        this.power_ups = power_ups;
    }
    getBadges(){
        return this.badges;
    }
    setBadges(badges){
        this.badges = badges;
    }
    getFriends(){
        return this.friends;
    }
    setFriends(friends){
        this.friends = friends;
    }

    // Might need more functions but these should suffice for now because Player objects dont have any seeming complexity.

}