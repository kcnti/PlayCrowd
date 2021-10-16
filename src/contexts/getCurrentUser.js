export default function getUser() {
    return JSON.parse(localStorage.getItem("authUser"));
}