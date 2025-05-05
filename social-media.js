// Twitter API Integration
function loadTwitterFeed() {
    // Note: In a production environment, you would need to use Twitter's API with proper authentication
    // This is a simulation using mock data
    
    const twitterFeed = document.getElementById('twitter-feed');
    
    // Mock tweets - in a real app, these would come from the Twitter API
    const tweets = [
        {
            text: "Registration for the new academic year begins next Monday. Check our admissions page for details! #EduConnect",
            date: "2 hours ago",
            url: "#"
        },
        {
            text: "The annual science fair had record participation this year. Congratulations to all participants! 🎉",
            date: "1 day ago",
            url: "#"
        },
        {
            text: "Reminder: Parent-teacher meetings scheduled for this Friday. Don't forget to book your slot.",
            date: "3 days ago",
            url: "#"
        }
    ];
    
    let twitterHTML = '';
    tweets.forEach(tweet => {
        twitterHTML += `
            <div class="social-post">
                <p>${tweet.text}</p>
                <small class="text-muted">${tweet.date} <a href="${tweet.url}" target="_blank">View on Twitter</a></small>
            </div>
        `;
    });
    
    twitterFeed.innerHTML = twitterHTML || '<p>Unable to load Twitter feed at this time.</p>';
}

// Facebook API Integration
function loadFacebookFeed() {
    // Note: In a production environment, you would need to use Facebook's Graph API with proper authentication
    // This is a simulation using mock data
    
    const facebookFeed = document.getElementById('facebook-feed');
    
    // Mock posts - in a real app, these would come from the Facebook API
    const posts = [
        {
            message: "Our new computer lab is now open! Students will have access to state-of-the-art technology for their studies.",
            date: "5 hours ago",
            image: "images/school-4.jpg",
            url: "#"
        },
        {
            message: "Congratulations to our debate team for winning the regional championships! 🏆",
            date: "2 days ago",
            image: "",
            url: "#"
        }
    ];
    
    let facebookHTML = '';
    posts.forEach(post => {
        facebookHTML += `
            <div class="social-post">
                <p>${post.message}</p>
                ${post.image ? `<img src="${post.image}" class="img-fluid mb-2" alt="Post image">` : ''}
                <small class="text-muted">${post.date} <a href="${post.url}" target="_blank">View on Facebook</a></small>
            </div>
        `;
    });
    
    facebookFeed.innerHTML = facebookHTML || '<p>Unable to load Facebook feed at this time.</p>';
}

// Initialize social media feeds
document.addEventListener('DOMContentLoaded', function() {
    loadTwitterFeed();
    loadFacebookFeed();

    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("twitter-feed").innerHTML = `
        <p><strong>@NgomaEdu:</strong> Our annual school ranking will be released next week!</p>
        <p><strong>@DistrictSchools:</strong> Check out the new curriculum updates for 2024!</p>
    `;

    document.getElementById("facebook-feed").innerHTML = `
        <p><strong>EduConnect Hub:</strong> Admission season is open! Visit the Admissions page to apply today.</p>
        <p><strong>Ngoma District:</strong> Don’t miss the Education Expo on June 10th.</p>
    `;
});

});