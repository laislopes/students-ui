const BASE_URL = "<Insert API URL here>";

function buildFetchObj(method, contentType, body) {
  return ({
    method: method,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "PUT,POST,GET",
    },
    body: body,
  });
}

async function createRegister(newRegister) {
  const fetchObj = buildFetchObj("POST", "application/json", JSON.stringify(newRegister))
  try {
    const res = await fetch(`${BASE_URL}/students`, fetchObj);
    return res.json();
  } catch (error) {
    return error;
  }
}

export { createRegister };
