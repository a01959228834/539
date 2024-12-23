const gameMachines = {
    "富遊電子-戰神賽特": 800,
    "富遊電子-忍": 200,
    "富遊電子-強棒HOMERUN": 100,
    "富遊電子-神鬼戰士": 40,
    "富遊電子-魔龍傳奇": 100,
    "富遊電子-祕寶探險": 40,
    "富遊電子-異星進化UpUp": 40
};

function getRandomAmount(selectedGame) {
    if (selectedGame.startsWith("RSG")) {
        const rsgAmounts = [2, 3, 6, 8, 10, 20, 40, 60, 100];
        const randomIndex = Math.floor(Math.random() * rsgAmounts.length);
        return rsgAmounts[randomIndex];
    } else {
        const amounts = [10, 30, 50, 60, 80, 100, 200, 500];
        const randomIndex = Math.floor(Math.random() * amounts.length);
        return amounts[randomIndex];
    }
}

function getRandomPercentage(min, max, amount, selectedGame) {
    let adjustedMin, adjustedMax;

    if (selectedGame.startsWith("RSG")) {
        adjustedMin = 70;
        adjustedMax = 95;
    } else {
        adjustedMin = 70;
        adjustedMax = 95;
    }

    const percentage = (Math.random() * (adjustedMax - adjustedMin) + adjustedMin).toFixed(1);
    return `${percentage}%`;
}

function isValidIP(ip) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const isValid = regex.test(ip);
    const octets = ip.split('.');
    for (let i = 0; i < octets.length; i++) {
        if (parseInt(octets[i], 10) > 255) {
            return false;
        }
    }
    return isValid;
}
//亂碼流水
function createMatrixEffect() {
    const matrixContainer = document.getElementById("matrixContainer");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // 字符集
    const columnWidth = 14; // 每列的寬度
    const columns = Math.floor(window.innerWidth / columnWidth); // 計算列數

    for (let i = 0; i < columns; i++) {
        const column = document.createElement("div");
        column.style.position = "absolute";
        column.style.left = `${i * columnWidth}px`; // 設置列的水平位置
        column.style.top = `0px`;
        column.style.width = `${columnWidth}px`;
        column.style.color = "#0f0"; // 綠色字體
        column.style.fontFamily = "monospace";
        column.style.fontSize = "14px";
        column.style.overflow = "hidden";
        matrixContainer.appendChild(column);

        function generateRandomChar() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        }

        function createColumnStream(columnElement) {
            const streamLength = Math.floor(Math.random() * 20) + 5; // 每列字符數
            let spans = columnElement.children;

            // 如果列中沒有字符，初始化字符
            if (spans.length === 0) {
                for (let j = 0; j < streamLength; j++) {
                    const span = document.createElement("span");
                    span.textContent = generateRandomChar();
                    span.style.display = "block";
                    columnElement.appendChild(span);
                }
            }

            // 滾動動畫
            let scrollPos = 0;
            const scrollSpeed = Math.random() * 5 + 3; // 隨機滾動速度
            setInterval(() => {
                scrollPos += scrollSpeed; // 每次滾動隨機速度
                columnElement.style.transform = `translateY(${scrollPos}px)`;

                // 當列滾出視窗時，重置滾動位置並刷新字符
                if (scrollPos > window.innerHeight) {
                    scrollPos = -streamLength * 14; // 重置到列的起始位置
                    // 只更新字符內容，不清空列
                    Array.from(spans).forEach((span) => {
                        span.textContent = generateRandomChar();
                    });
                }
            }, 50);
        }

        // 為每列創建獨立的滾動效果
        setTimeout(() => createColumnStream(column), Math.random() * 3000);
    }
}

// 啟動亂碼效果
document.addEventListener("DOMContentLoaded", createMatrixEffect);

function startOptimization() {
    const optimizationMessage = document.getElementById("optimizationMessage");
    const codeBox = document.getElementById("codeBox");

    // 顯示優化信息視窗
    optimizationMessage.textContent = "此為RSG雷神之鎚、戰神呂布專用";
    // 計算 ipContainer 的位置
    const rect = ipContainer.getBoundingClientRect();
    const bottomOffset = rect.bottom + window.scrollY;

    // 動態調整 optimizationMessage 的位置
    optimizationMessage.style.display = "block";
    optimizationMessage.style.position = "absolute";
    optimizationMessage.style.top = `${bottomOffset + 20}px`;
    optimizationMessage.style.left = "50%";
    optimizationMessage.style.transform = "translateX(-50%)";

    // 動態調整 codeBox 的位置
    codeBox.style.display = "block";
    codeBox.style.position = "absolute";
    codeBox.style.top = `${bottomOffset + 220}px`; // 優化視窗下方
    codeBox.style.left = "50%";
    codeBox.style.transform = "translateX(-50%)";

    setTimeout(() => {
        optimizationMessage.textContent = "數據正在分析中...";
        codeBox.style.display = "block";
        codeBox.innerHTML = "正在優化數據中...";

        const startTime = Date.now();
        function generateRandomCode() {
            const elapsed = (Date.now() - startTime) / 1000;
            if (elapsed < 5) {
                const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/~`abcdefghijklmnopqrstuvwxyz';
                let randomCode = '';
                for (let i = 0; i < 60; i++) {
                    randomCode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                }
                codeBox.innerHTML += randomCode + '\n';
                codeBox.scrollTop = codeBox.scrollHeight;
                setTimeout(generateRandomCode, 100);
            } else {
                codeBox.style.display = "none";
                optimizationMessage.textContent = "數據優化成功";
                setTimeout(() => {
                    optimizationMessage.style.display = "none";
                }, 1000);
            }
        }

        generateRandomCode();
    }, 3000);
}


function confirmSelection() {
    const ip = ipInput.value;
    const selectedGame = document.getElementById("systemProvider").value;
    const accountInput = document.getElementById("accountInput").value;
    const roomNumber = document.getElementById("roomNumberInput").value;

    if (ip === "" || !isValidIP(ip)) {
        ipInput.placeholder = "請輸入正確的IP地址";
        alert("IP地址無效");
        return;
    }

    if (accountInput === "") {
        alert("尚未輸入會員帳號");
        return;
    }

    if (roomNumber === "") {
        document.getElementById("roomNumberDisplayText").textContent = "已設定房號: 未輸入房號";
    } else {
        document.getElementById("roomNumberDisplayText").textContent = `已設定房號: ${roomNumber}`;
    }

    ipInput.placeholder = "正在自動獲取 IP 中...";
    document.getElementById("ipContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    startInitialization(selectedGame);
}

let animationFrameId = null; // 用於追蹤 requestAnimationFrame

function startInitialization(selectedGame) {
    let countdown = 5;
    let progress = 0;
    const countdownText = document.getElementById("countdownText");
    const initializingText = document.getElementById("initializingText");
    const loadingStatus = document.getElementById("loadingStatus");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const progressContainer = document.getElementById("progressContainer");
    const ip = ipInput.value;
    const codeBox = document.getElementById("codeBox");

    countdownText.textContent = countdown;

    const marqueeContainer = document.getElementById("marqueeContainer");
    const marqueeText = document.createElement("div");
    marqueeText.id = "marqueeText";
    marqueeContainer.appendChild(marqueeText);

    // 更換背景為 AI 優化中的圖片
    document.body.style.backgroundImage = "url('./AI_bg.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    // 將文字內容重複多次
    const baseText = "數據資料讀取中 ";
    marqueeText.textContent = baseText.repeat(1); // 根據容器寬度重複文字
    marqueeContainer.appendChild(marqueeText);

    let marqueePos = marqueeContainer.offsetWidth; // 初始位置在容器外右側

    function animateMarquee() {
        marqueePos -= 2; // 每次向左移動2px
        marqueeText.style.left = `${marqueePos}px`;

        // 當文字完全離開左側，重置到右側外部
        if (marqueePos < -marqueeText.offsetWidth) {
            marqueePos = marqueeContainer.offsetWidth;
        }

        animationFrameId = requestAnimationFrame(animateMarquee); // 持續執行動畫
    }

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownText.textContent = countdown;
        if (countdown <= 5) {
            // 停止先前的動畫循環（避免累積動畫）
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            // 顯示跑馬燈
            marqueeContainer.style.display = "block";
            //marqueePos = marqueeContainer.offsetWidth; // 重設位置
            animateMarquee();
        }
        if (countdown === 0) {
            // 隱藏跑馬燈並停止動畫
            marqueeContainer.style.display = "none";
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }

            clearInterval(countdownInterval);
            countdownText.textContent = "";
            initializingText.style.display = "none";
            loadingStatus.innerHTML = '數據資料讀取完成 <br><br>正在寫入爆分數據';

            progressContainer.style.display = "block";
            const progressInterval = setInterval(() => {
                progress += 1;
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `寫入進度: ${progress}%`;
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    progressText.textContent = "寫入完成";
                    progressContainer.style.display = "none";
                    loadingStatus.style.display = "none";

                    updateRateAndAmount(selectedGame);

                    codeBox.style.display = "none";
                    // 恢復原背景
                    document.body.style.backgroundImage = "url('./new_bg.png')";
                }
            }, 100);

            codeBox.style.display = "block";
            codeBox.innerHTML = '遊戲數據寫入中..';

            const startTime = Date.now();
            function generateCode() {
                const elapsed = (Date.now() - startTime) / 1000;
                if (elapsed < 10) {
                    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/~`abcdefghijklmnopqrstuvwxyz';
                    let codeLine = '';
                    for (let i = 0; i < 60; i++) {
                        codeLine += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                    }
                    codeBox.innerHTML += codeLine + '\n';
                    codeBox.scrollTop = codeBox.scrollHeight;
                    setTimeout(generateCode, 100);
                } else {
                    codeBox.style.display = "none";
                    loadingStatus.innerHTML += '<br>增加爆分機率寫入完成';
                    setTimeout(() => {
                        loadingStatus.innerHTML = "";
                        updateRateAndAmount(selectedGame);
                    }, 1000);
                }
            }
            generateCode();
        }
    }, 1000);
}

function updateRateAndAmount(selectedGame) {
    const suggestedAmounts = [3, 5, 10, 20, 30, 40, 50, 100];
    const randomIndex = Math.floor(Math.random() * suggestedAmounts.length);
    const suggestedAmount = suggestedAmounts[randomIndex]; // 從指定數字中隨機選擇

    const explosionRate = getRandomPercentage(3, 20, suggestedAmount, selectedGame); // 傳入遊戲類型

    const randomGameCode = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    document.getElementById("warningText").innerHTML = `
    <span style="color: red;">⚠️AI優化中請勿關閉網頁⚠️</span><br>
    <span style="color: red;">💾正在執行程序💾</span><br>
    <span style="color: red;">導致失效自行負責</span><br>
    
`;
    document.getElementById("explosionRateText").textContent = `設定成功當前爆分率: ${explosionRate}`;
    document.getElementById("ipDisplayText").textContent = `已設定的IP: ${ipInput.value}`;
    document.getElementById("gameDisplayText").textContent = `已選擇的遊戲: ${selectedGame}`;
    document.getElementById("suggestedAmountText").textContent = `建議金額: ${suggestedAmount}`;
    document.getElementById("gameCodeText").textContent =
        `遊戲流水單末三碼 : "${randomGameCode}" ±20可購買`;


    setTimeout(() => {
        document.getElementById("warningText").innerHTML += "<br><br>💣增加爆分機率中💣";
    }, 1000);

    document.getElementById("resetButton").style.display = "block";
    document.getElementById("resultContainer").style.display = "block";
}

function resetRate() {
    const selectedGame = document.getElementById("systemProvider").value;
    const accountInput = document.getElementById("accountInput");

    if (selectedGame && accountInput.value !== "") {
        document.getElementById("resultContainer").style.display = "none";
        document.getElementById("ipContainer").style.display = "block";
        document.getElementById("accountInput").value = "";
        document.getElementById("ipInput").value = "正在自動獲取 IP 中..";
        document.getElementById("resetButton").style.display = "none";

        document.getElementById("explosionRateText").textContent = "";
        document.getElementById("suggestedAmountText").textContent = "";
        document.getElementById("ipDisplayText").textContent = "";
        document.getElementById("gameDisplayText").textContent = "";
        document.getElementById("gameCodeText").textContent = "";
        document.getElementById("warningText").innerHTML = "";

        document.getElementById("ipInput").placeholder = "正在自動獲取 IP 中..";
    }
}

function resetRate() {
    const selectedGame = document.getElementById("systemProvider").value;
    if (selectedGame) {
        updateRateAndAmount(selectedGame);
    }
}

function getIPAddress() {
    setTimeout(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipInput.value = data.ip;
                ipInput.placeholder = "請輸入IP";
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
                ipInput.placeholder = "無法獲取IP地址";
            });
    }, 1);
}

document.addEventListener("DOMContentLoaded", () => {
    getIPAddress();
});
//GPT
document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chatGPTButton");
    const chatWindow = document.getElementById("chatGPTWindow");
    const closeChatButton = document.getElementById("closeChatWindow");
    const chatContent = document.getElementById("chatContent");
    const chatInput = document.getElementById("chatInput");
    const sendChatButton = document.getElementById("sendChat");

    const apiKey = "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";
    const endpoint = "https://api.openai.com/v1/chat/completions";

    let isRequesting = false;

    // 显示聊天窗口
    chatButton.addEventListener("click", () => {
        chatWindow.style.display = "flex";
    });

    // 关闭聊天窗口
    closeChatButton.addEventListener("click", () => {
        chatWindow.style.display = "none";
    });

    // GPT API 请求
    async function sendToGPT(message) {
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [{ role: "user", content: message }],
                }),
            });

            if (!response.ok) {
                throw new Error("API 请求失败");
            }

            const data = await response.json();
            return data.choices[0].message.content.trim();
        } catch (error) {
            console.error("GPT API 发生错误:", error);
            return "抱歉，目前无法响应，请稍后再试！";
        }
    }

    // 乐透查询逻辑
    async function fetchLotteryData(drawYear, drawMonth) {
        const URL = "https://superiorapis-creator.cteam.com.tw/manager/feature/proxy/39a900e2dedcbdbf050d9676973da99d69/pub_77e199b6f89255bca6769740bad9e0";

        const postData = {
            draw_type: 3, // 今彩539
            draw_year: drawYear,
            draw_month: drawMonth
        };

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjZXJ0IjoiYmQ3NTU2YzQ4ZmM1MDVmOTRhMTEyZmZmZTgxOThhODI2Yzg0OTUxMSIsImlhdCI6MTczNDk2NDE4Nn0.ZSWR9MNpC-N4Ahq6uc8n4XcdE_3OM82EQpnAo3ZAf7I";

        const config = {
            headers: {
                "Content-Type": "application/json",
                token
            }
        };

        try {
            const response = await axios.post(URL, postData, config);
            return response.data;
        } catch (error) {
            console.error("乐透查询失败:", error.response || error.message);
            return { error_msg: "无法获取乐透数据" };
        }
    }

    // 从输入中提取年份和月份
    function extractYearAndMonthFromMessage(message) {
        const match = message.match(/(\d{4})[年\s]?(\d{1,2})月?/);
        if (match) {
            const year = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            if (year > 0 && month >= 1 && month <= 12) {
                return { year, month };
            }
        }
        return null; // 无法提取
    }

    // 发送聊天消息
    sendChatButton.addEventListener("click", async () => {
        if (isRequesting) {
            console.warn("正在处理请求，请稍后");
            return;
        }
        isRequesting = true;

        const userMessage = chatInput.value.trim();
        if (!userMessage) {
            const warning = document.createElement("p");
            warning.textContent = "请输入有效内容";
            warning.classList.add("gpt-message");
            chatContent.appendChild(warning);
            isRequesting = false;
            return;
        }

        // 显示用户消息
        const userMessageElement = document.createElement("p");
        userMessageElement.classList.add("user-message");
        userMessageElement.textContent = userMessage;
        chatContent.appendChild(userMessageElement);

        if (/今彩539/.test(userMessage)) {
            const dateInfo = extractYearAndMonthFromMessage(userMessage);
            if (dateInfo) {
                const { year, month } = dateInfo;

                try {
                    const lotteryData = await fetchLotteryData(year, month);
                    if (lotteryData && Array.isArray(lotteryData)) {
                        // 找到最新的开奖数据
                        const latestDraw = lotteryData.reduce((latest, current) => {
                            return new Date(current.draw_date) > new Date(latest.draw_date) ? current : latest;
                        });

                        // 显示最新一期的数据
                        const latestReply = document.createElement("div");
                        latestReply.classList.add("gpt-message");

                        latestReply.innerHTML = `
                            <strong>最新开奖数据：</strong><br>
                            <strong>期别：</strong> ${latestDraw.period || "无数据"}<br>
                            <strong>开奖日期：</strong> ${latestDraw.draw_date || "无数据"}<br>
                            <strong>总奖金：</strong> ${(latestDraw.total_amount || 0).toLocaleString()} 元<br>
                            <strong>销售总额：</strong> ${(latestDraw.sell_amount || 0).toLocaleString()} 元<br>
                            <strong>开奖号码：</strong> ${latestDraw.draw_number_appear?.join(", ") || "无数据"}<br>
                            <strong>特别号：</strong> ${latestDraw.special_number || "无数据"}<br>
                            <hr>
                        `;
                        chatContent.appendChild(latestReply);

                        // 统计当月号码的出现次数
                        const numberFrequency = {};
                        lotteryData.forEach((item) => {
                            item.draw_number_appear?.forEach((num) => {
                                numberFrequency[num] = (numberFrequency[num] || 0) + 1;
                            });
                        });

                        // 计算出现概率
                        const totalDraws = lotteryData.length;
                        const probabilitySummary = Object.entries(numberFrequency)
                            .sort((a, b) => b[1] - a[1]) // 按出现次数排序
                            .map(([num, count]) => `${num}: ${(count / totalDraws * 100).toFixed(2)}%`)
                            .join("<br>");

                        // 显示当月号码出现概率
                        const probabilityReply = document.createElement("div");
                        probabilityReply.classList.add("gpt-message");

                        probabilityReply.innerHTML = `
                            <strong>当月号码出现概率统计：</strong><br>
                            ${probabilitySummary}
                            <hr>
                        `;
                        chatContent.appendChild(probabilityReply);
                    } else {
                        const gptReply = document.createElement("p");
                        gptReply.classList.add("gpt-message");
                        gptReply.textContent = "GPT: 无法获取有效的乐透数据。";
                        chatContent.appendChild(gptReply);
                    }
                } catch (error) {
                    const errorReply = document.createElement("p");
                    errorReply.classList.add("gpt-message");
                    errorReply.textContent = "GPT: 查询失败，请稍后再试！";
                    chatContent.appendChild(errorReply);
                }
            } else {
                const errorReply = document.createElement("p");
                errorReply.classList.add("gpt-message");
                errorReply.textContent = "GPT: 请输入正确的年份和月份，例如：2024年12月。";
                chatContent.appendChild(errorReply);
            }
        } else {
            const gptReply = await sendToGPT(userMessage);
            const gptMessageElement = document.createElement("p");
            gptMessageElement.classList.add("gpt-message");
            gptMessageElement.textContent = `GPT: ${gptReply}`;
            chatContent.appendChild(gptMessageElement);
        }

        chatInput.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;
        isRequesting = false;
    });
});













