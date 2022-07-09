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
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
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
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

const containerMain = document.getElementById('container-main')
const urlParams = new URLSearchParams(window.location.search)
let userIndex = 0;

function userOne() {
    const urlParams = new URLSearchParams();
    urlParams.set('user', 'user1');
    window.location.href = 'http://127.0.0.1:3000/JS%20Projects/Dynamic-Twitter/index.html?' + urlParams.toString();
}

function userTwo() {
    const urlParams = new URLSearchParams();
    urlParams.set('user', 'user2');
    window.location.href = 'http://127.0.0.1:3000/JS%20Projects/Dynamic-Twitter/index.html?' + urlParams.toString();
}

if(urlParams.toLocaleString() ==  'user=user1') {
    userIndex = 0    
} else {
    userIndex = 1
}
const users = [user1, user2]

const tweetCount = users[userIndex].tweets.length

const headerContainer = document.getElementById('header-cntr')
const coverPhoto = document.getElementById('cover-photo-cntr')
const profileInfo = document.getElementById('profile-info-cntr')
const tweetsContainer = document.getElementById('tweets-cntr')

headerContainer.innerHTML = `
    <div class='user'>
        <div>
            <a href='#'><img id='elon-arrow' class='arrows arrow-left' src='assets/arrow-left.png'></a>
        </div>
        <div>
            <div class='header-text'>
                <h1>${users[0].displayName}</h1><span><img class='twitter-verified' src='assets/twitter-verified.png'></span>
            </div>
            <p>${tweetCount} Tweets</p>        
        </div>
    </div>
    <div>
        <a href='timeline.html'><button class='timeline-btn'>Timeline</button></a>
    </div>
    <div class='user'>
        <div>
            <div class='header-text'>
                <h1>${users[1].displayName}</h1><span><img class='twitter-verified' src='assets/twitter-verified.png'></span>
            </div>
            <p>${tweetCount} Tweets</p>        
        </div>
        <div>
            <a href='#'><img id='bill-arrow' class='arrows arrow-right' src='assets/arrow-right.png'></a>
        </div>
    </div>
`

coverPhoto.innerHTML = `
    <div class='cover-img'>
        <img src='${users[userIndex].coverPhotoURL}'
    </div>
`

profileInfo.innerHTML = `
    <div class='profile-top'>
        <div class='avatar-n-info'>
            <img src='${users[userIndex].avatarURL}'>
            <div class='twitter-verified'>
                <h2>${users[userIndex].displayName}</h2>
                <img src='assets/twitter-verified.png'>
            </div>
            <p>${users[userIndex].userName}</p>
            <p>${users[userIndex].description}</p>
            <p><span><i class="fa fa-map-marker" aria-hidden="true"></i> ${users[userIndex].location}</span><span><i class="fa fa-link"></i> <a href="#">${users[userIndex].urlLink}</a></span><span><i class="fa fa-calendar" aria-hidden="true"></i> Joined ${users[userIndex].joinedDate}</span></p>
            <p><strong>${users[userIndex].followingCount}</strong> Following <span><strong>${abbreviateNumber(users[userIndex].followerCount)}</strong> Followers</span></p>
        </div>        
        <div>
            <button class='follow-btn'>Following</button>
        </div>
    </div>
`

tweetsContainer.innerHTML = `
    <div class="selector">
        <div class="tab tab-active">
            <h3>Tweets</h3>
        </div>
        <div class="tab">
            <h3>Tweets & replies</h3>
        </div>
        <div class="tab">
            <h3>Media</h3>
        </div>
        <div class="tab">
            <h3>Likes</h3>
        </div>
    </div>
`
for (let i = 0; i < users[userIndex].tweets.length; i++) {
    const tweet = users[userIndex].tweets[i];
    const tweetValues = Object.values(tweet);
    console.log(tweetValues)
    const tweetCreated = tweetValues[1];
    console.log(tweetCreated)
    
    const arr = tweetCreated.split('/');
    console.log(arr)
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const displayMonth =  parseInt(arr[1],10) - 1;
    console.log(displayMonth)

    const tweetBlock = document.createElement('div')
    tweetBlock.classList.add('tweet-block')
    tweetBlock.innerHTML = `
        <div class='tweet-container'>
            <img class='tweet-avatar' src='${users[userIndex].avatarURL}'>
            <div class='tweet-body'>
                <div class='tab-username'>
                    <p>${users[userIndex].displayName}</p><img src='assets/twitter-verified.png'><span>${users[userIndex].userName}</span><span style='padding-left: 5px'>${months[displayMonth] + ' '+ arr[0]}</span>
                </div>
                <p>${tweetValues[0]}</p>
                <div class='tweet-icons'>
                    <div class="tweet-icon reply"><a href=""><i class="fa fa-comment"></i></a></div>
                    <div class="tweet-icon retweet"><a href=""><i class="fa fa-retweet"></i></a></div>
                    <div class="tweet-icon like"><a href=""><i class="fa fa-heart"></i></a></div>
                    <div class="tweet-icon share"><a href=""><i class="fa fa-upload"></i></a></div>
                </div>
            </div>            
        </div>
    `
    tweetsContainer.appendChild(tweetBlock)
}

const switchElon = document.getElementById('elon-arrow')
switchElon.addEventListener('click', userOne)

const switchBill = document.getElementById('bill-arrow')
switchBill.addEventListener('click', userTwo)

function setNewActive(el) {
    var tabs = document.getElementsByClassName('tab')
    for (var tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}

var tabs = document.getElementsByClassName('tab');
for (var tab of tabs) {
    // add click listener to each tab
    tab.addEventListener('click', (e) => {
        setNewActive(e.currentTarget)
    })
}


function abbreviateNumber(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
