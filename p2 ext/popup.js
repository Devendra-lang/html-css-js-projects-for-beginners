function shareOnFacebook() {
    getCurrentTabUrl(function(url) {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    });
}

// Function to share content on Twitter
function shareOnTwitter() {
    getCurrentTabUrl(function(url) {
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    });
}

// function shareOnInstagram(){
//     getCurrentTabUrl(function(url){
//         const shareUrl = `https://instagram.com/direct/inbox/?=${encodeURIComponent(url)}`;
//         window.open(shareUrl,'_blank');
//     })
// }

// function shareOnThread(){
//     getCurrentTabUrl(function(url){
//         const shareUrl = `https://www.threads.net/?url=${encodeURIComponent(url)}`;
//         window.open(shareUrl,'_blank');
//     })
// }

function shareOnLinkedin(){
    getCurrentTabUrl(function(url){
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl,'_blank');
    });
}

function shareOnReddit(){
    getCurrentTabUrl(function(url){
        const shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}`
        window.open(shareUrl,'_blank');
    });
}

function shareOnWhatsapp(){
    getCurrentTabUrl(function(url){
        const textToShare = 'Hey see what i found!'
        const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}%20${encodeURIComponent(url)}`;
        window.open(shareUrl,'_blank')
    })
}
// Function to copy the current tab URL to the clipboard
function copyLink() {
    getCurrentTabUrl(function(url) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy link: ', err);
        });
    });
}

// Helper function to get the current tab URL
function getCurrentTabUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length > 0) {
            const activeTab = tabs[0];
            callback(activeTab.url);
        } else {
            console.error('No active tab found.');
        }
    });
}

// Event listeners for button clicks
document.addEventListener('DOMContentLoaded', function() {
    const facebookButton = document.getElementById('shareFacebook');
    const twitterButton = document.getElementById('shareTwitter');
    const linkedinButton = document.getElementById('shareLinkedin');
    const whatsappButton = document.getElementById('shareWhatsapp');
    const redditButton = document.getElementById('shareReddit');
    const copyButton = document.getElementById('copyLink');
    // const instagramButton = document.getElementById('shareInstagram');
    // const ThreadButton = document.getElementById('shareThread');

    if (facebookButton) {
        facebookButton.addEventListener('click', shareOnFacebook);
    } else {
        console.error('Facebook share button not found.');
    }

    if (twitterButton) {
        twitterButton.addEventListener('click', shareOnTwitter);
    } else {
        console.error('Twitter share button not found.');
    }
    // if (instagramButton){
    //     instagramButton.addEventListener('click',shareOnInstagram);
    // } 
    //    else{
    //       console.log('Instagram share button not found.');
    //    }
       if (linkedinButton){
        linkedinButton.addEventListener('click',shareOnLinkedin);
    } 
       else{
          console.log('Linkedin share button not found.');
       }
       if (copyButton) {
        copyButton.addEventListener('click', copyLink);
    } else {
        console.error('Copy link button not found.');
    }

    if (whatsappButton) {
        whatsappButton.addEventListener('click', shareOnWhatsapp);
    } else {
        console.error('whatsapp link button not found.');
    }

    if (redditButton) {
        redditButton.addEventListener('click', shareOnReddit);
    } else {
        console.error('Reddit link button not found.');
    }


    // if (ThreadButton) {
    //     ThreadButton.addEventListener('click', shareOnThread);
    // } else {
    //     console.error('Thread link button not found.');
    // }
});
