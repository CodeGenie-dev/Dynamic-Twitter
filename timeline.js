const user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    description: 'Technoking of Tesla, Imperator of Mars.',
    location: 'Mars',
    urlLink: 'tesla.com',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '28/10/2021 05:22:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/11/2021 12:11:51'
        }
    ]
};

const user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    description: 'Sharing things I\'m learning through my foundation work and other interests.',
    location: 'Seattle, WA',
    urlLink: 'gatesnot.es/HowToAvoidCli...',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 06:11:51'
        },
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '5/12/2021 18:30:12'
        }
    ]
};

const timelineContainer = document.getElementById('timeline-container')

const users = [user1, user2]
let sortedTweets = new Array()

for (let user of users) {
    for (let i = 0; i < user.tweets.length; i++) {        
        const dateParts = user.tweets[i].timestamp.split('/')
        const dd = dateParts[0]
        const mm = dateParts[1]
        const yyyy = dateParts[2].split(' ')[0]
        const dateTime = dateParts[2].split(' ')[1]
        const date = new Date(`${mm}/${dd}/${yyyy} ${dateTime}`)
        const allTweets = {}
        allTweets.displayName = user.displayName
        allTweets.userName = user.userName
        allTweets.avatarURL = user.avatarURL
        allTweets.text = user.tweets[i].text
        allTweets.timestamp = date
        sortedTweets.push(allTweets)
    }
}

sortedTweets = sortedTweets.sort((a, b) => {
    return Number(a.timestamp) - Number(b.timestamp)
})

for (let i = 0; i < sortedTweets.length; i++) {
    const tweetContainer = document.createElement('div')
    tweetContainer.classList.add('tweet-container')
    tweetContainer.innerHTML = `
        <div class='container'>
            <img class='tweet-avatar' src='${sortedTweets[i].avatarURL}'>
            <div class='tweet-body'>
                <div class='tab-username'>
                    <p>${sortedTweets[i].displayName}</p><img src='assets/twitter-verified.png'><span>${sortedTweets[i].userName}</span><span style='padding-left: 5px'>${sortedTweets[i].timestamp.toDateString()}</span>
                </div>
                <p>${sortedTweets[i].text}</p>
                <div class='tweet-icons'>
                    <div class="tweet-icon reply"><a href=""><i class="fa fa-comment"></i></a></div>
                    <div class="tweet-icon retweet"><a href=""><i class="fa fa-retweet"></i></a></div>
                    <div class="tweet-icon like"><a href=""><i class="fa fa-heart"></i></a></div>
                    <div class="tweet-icon share"><a href=""><i class="fa fa-upload"></i></a></div>
                </div>
            </div> 
        </div>
    `
    timelineContainer.appendChild(tweetContainer)
}