document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("videoCreatorForm");
    const result = document.getElementById("result");
    const resultContent = document.getElementById("resultContent");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const inputData = {
            tool: "video_creator",
            topic: formData.get("topic"),
            audience: formData.get("audience"),
            painPoint: formData.get("painPoint"),
            situation: formData.get("situation"),
            format: formData.get("format"),
            duration: formData.get("duration"),
            scenes: formData.get("scenes"),
            style: formData.get("style")
        };

        result.hidden = false;

        resultContent.innerHTML = `
            <p><strong>Đã nhận dữ liệu:</strong></p>
            <pre>${JSON.stringify(inputData, null, 2)}</pre>
            <p>🔧 Make + Gemini sẽ được kết nối ở bước sau.</p>
        `;
    });
});
