// social-media.js

document.addEventListener("DOMContentLoaded", function () {
    loadTwitterFeed();
    loadFacebookFeed();
});

// Mock Twitter Feed
function loadTwitterFeed() {
    const twitterFeed = document.getElementById("twitter-feed");
    const tweets = [
        {
            user: "@NgomaEdu",
            content: "🎓 New school registration deadlines extended to May 10th!",
            time: "2h ago"
        },
        {
            user: "@EduConnectRW",
            content: "📢 We're launching a new platform for student admission tracking next week!",
            time: "6h ago"
        }
    ];

    tweets.forEach(tweet => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("mb-3");
        tweetElement.innerHTML = `
            <p><strong>${tweet.user}</strong> - ${tweet.time}</p>
            <p>${tweet.content}</p>
            <hr>
        `;
        twitterFeed.appendChild(tweetElement);
    });
}

// Mock Facebook Feed
function loadFacebookFeed() {
    const facebookFeed = document.getElementById("facebook-feed");
    const posts = [
        {
            page: "Ngoma District Schools",
            content: "📸 Check out photos from last week's science fair held at IPRC Ngoma!",
            time: "1 day ago"
        },
        {
            page: "EduConnect Hub",
            content: "✅ We've added 20 new schools to our directory. Explore them now!",
            time: "3 days ago"
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("mb-3");
        postElement.innerHTML = `
            <p><strong>${post.page}</strong> - ${post.time}</p>
            <p>${post.content}</p>
            <hr>
        `;
        facebookFeed.appendChild(postElement);
    });
}
