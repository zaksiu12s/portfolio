import { Analytics } from "analytics";

const URL = "http://localhost:5000/api/v1/websiteInfo";

const pageStartTime = Date.now();

const trackTimeSpent = (analytics) => {
    const timeSpent = Date.now() - pageStartTime;
    analytics.track('Page Time Spent', {
        category: 'Page Interaction',
        label: window.location.pathname,
        timeSpent: timeSpent
    });
    console.log(`Time spent on ${window.location.pathname}: ${timeSpent} ms`);
};

const trackPageView = (analytics) => {
    analytics.page({
        path: window.location.pathname,
        title: document.title,
        url: window.location.href
    });
    console.log(`Page view tracked: ${window.location.pathname}`);
};

async function updateWebsiteTraffic() {
    try {
        const response = await fetch(URL);

        if (response.ok === true) {
            const data = await response.json();
            console.log("TRAFFIC HANDLER PAYLOAD: " + data.count);
        } else {
            console.error("TRAFFIC HANDLER ERROR: trying again to update website traffic data.");
            setTimeout(() => { updateWebsiteTraffic() }, 1000);
        }
    } catch (error) {
        console.error("TRAFFIC HANDLER ERROR: " + error + ". Trying again to update website traffic data.");
        setTimeout(() => { updateWebsiteTraffic() }, 10000);
    }
}

async function init() {
    console.log("TRAFFIC HANDLER PAYLOAD: Starting traffic handler.");

    const analytics = Analytics({
        app: 'my-app-name',
        version: "1.4.2",
        plugins: []
    });

    trackPageView(analytics);

    const timeTrackingInterval = setInterval(() => {
        trackTimeSpent(analytics);
        console.log("TRAFFIC HANDLER")
    }, 5000);

    window.addEventListener('beforeunload', () => {
        clearInterval(timeTrackingInterval);
        trackTimeSpent(analytics);
        console.log("Final time spent on page: " + (Date.now() - pageStartTime) + " ms");
    });

    console.log("TRAFFIC HANDLER PAYLOAD: trying to update website traffic data.");
    updateWebsiteTraffic();
}

export default init();
