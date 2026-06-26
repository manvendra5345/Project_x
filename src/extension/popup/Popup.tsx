function Popup() {
  async function handleTransfer() {
    try {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const currentTab = tabs[0];

      if (!currentTab) {
        alert("No active tab found.");
        return;
      }

      console.log("Current Tab:", currentTab);

      alert(
        `Title: ${currentTab.title}\n\nURL: ${currentTab.url}`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="w-[400px] h-[600px] bg-slate-950 text-white p-6">
      <h1 className="text-2xl font-bold">🧠 Project X</h1>

      <p className="mt-2 text-slate-400">
        AI Context Transfer
      </p>

      <div className="mt-8 rounded-lg border border-slate-700 p-4">
        <p className="text-sm text-slate-400">
          Current AI
        </p>

        <p className="mt-2 font-semibold">
          Not Connected
        </p>
      </div>

      <button
        onClick={handleTransfer}
        className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
      >
        Transfer Context
      </button>

      <p className="mt-6 text-center text-xs text-slate-500">
        Status: Ready
      </p>
    </div>
  );
}

export default Popup;
