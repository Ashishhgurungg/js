class Channel {
    constructor(name){
        this.name = name;
        this.subscribers = [];
    }

    subscribeChannel(user){
        this.subscribers.push(user);
        console.log(`${user.name} has subscribed the channel`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter((subscriber)=> {
            if (subscriber.name !== user.name) {
                return true;
            }
            else{
                return false;
            }
        });
    }

    giveUpdate(message){
        this.subscribers.forEach(subs => {
            subs.updates(`${this.name} has ${message}`);
        });
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    updates(data){
        console.log(data);
    }
}

const user1 = new User("ashish");
const user2 = new User("jennie");

const dankCodes = new Channel("Dank Codes");
dankCodes.subscribeChannel(user1);
dankCodes.subscribeChannel(user2);
dankCodes.giveUpdate("New Video uploaded");
dankCodes.unsubscribe(user2);
dankCodes.giveUpdate("Just posted");
console.log(dankCodes.subscribers);