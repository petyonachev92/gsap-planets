import gsap from 'gsap/all'

export default class Animation {
    constructor() {
        this._planets = document.querySelectorAll(".dots");
        this._scaleBtn = document.querySelector("#scale-button")
        this._positionBtn = document.querySelector("#position-button")
        this._stopBtn = document.querySelector("#stop-button")
        this._tl = gsap.timeline()
    }

    async start() {
        this._scaleBtn.addEventListener("click", () => {
            this._tl.restart().clear()
            this._tl.fromTo(this._planets, {scale: 1}, {scale: 0, stagger: 0.1})
            .to(this._planets, {scale: 1, stagger: 0.1}).repeat(-1)
        })
        this._positionBtn.addEventListener("click", () => {
            this._tl.restart().clear()
            this._tl.to(this._planets, {y: 50, stagger: {
                each: 0.05,
                from: "center"}})
            .to(this._planets, {y: 0, stagger: {
                each: 0.05,
                from: "center"}}).repeat(-1)
        })
        this._stopBtn.addEventListener("click", async () => {
            this._tl.restart().clear().pause()
        })
    }
}