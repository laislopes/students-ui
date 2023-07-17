import generateS3PresignedUrl from "./S3Urlgenerator.js";

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

async function sendFileViaURL (url, file) {
  const fetchObj = buildFetchObj("PUT", "text/csv; charset=utf-8", file);
  try {
    const res = await fetch(url, fetchObj);
    if (res.status === 200) {
      return "File Upload completed successfully!"
    } else {
      return "File Upload failed"
    }
  } catch (error) {
    return error;
  }
}

async function generatePresignedURL (fileName) {
  const urlKey = await generateS3PresignedUrl(fileName);
  return urlKey;
}

export { createRegister, sendFileViaURL, generatePresignedURL };
