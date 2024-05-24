const { createOpenAPI, createWebsocket, Intents } = require("qq-guild-bot");

let tokenInfo;
try {
    tokenInfo = require("../token.json");
    console.log('Configuration loaded successfully:\n', tokenInfo);
    // 列举所需的Json键
    /**
     * QQID
     * AppID
     * Token
     * AppSecret
     */
} catch (error) {
    console.error('Failed to load configuration:\n', error.message);
}

console.log(tokenInfo);

const config = {
    appID: tokenInfo.AppID,
    token: tokenInfo.Token,
    Intents: ['PUBLIC_GUILD_MESSAGES'],
    sandbox: false,
};

const client = createOpenAPI(config);

const ws = createWebsocket(config);
