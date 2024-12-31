const URL = "http://localhost:5000/api/v1/websiteInfo"

async function updateWebsiteTraffic() {
    try {
        const response = await fetch(URL);

        if (response.ok === true) {
            const data = await response.json();

            console.log("TRAFFIC HANDLER PAYLOAD: " + data.count);
        } else {
            console.error("TRAFFIC HANDLER ERROR: trying again to update website traffic data.")
            setTimeout(() => { updateWebsiteTraffic() }, 1000);
        }
    } catch (error) {
        console.error("TRAFFIC HANDLER ERROR: " + error + ". Trying again to update website traffic data.");
        setTimeout(() => { updateWebsiteTraffic() }, 10000);
    }
}

async function init() {
    console.log("TRAFFIC HANDLER PAYLOAD: Starting traffic handler.");

    console.log("TRAFFIC HANDLER PAYLOAD: trying to update website traffic data.")
    updateWebsiteTraffic();
}

export default init();