(ns foresee.drawing)
(enable-console-print!)

;; -----------------------------------------------------------------------------
;; canvas
(def canvas-id "canvas")
(def canvas (.getElementById js/document canvas-id))
(def screen-width (.-width canvas))
(def screen-height (.-height canvas))

(println (str "screen-resolution: " screen-width "x" screen-height))

(def stage (new js/createjs.Stage canvas-id))
(.log js/console stage)

;; -----------------------------------------------------------------------------
;; drawing
(defn draw-on-stage [shape]
  (do
    (.addChild stage shape)
    (.update stage)))

(defn ball [radius]
  (let [graphics (new js/createjs.Graphics)]
    (doto
      graphics
      (.setStrokeStyle 1)
      (.beginStroke "black")
      ; top to bottom line
      (.moveTo 0 (- radius))
      (.lineTo 0 radius)
      ; left to right line
      (.moveTo (- radius) 0)
      (.lineTo radius 0)
      (.drawCircle 0 0 radius))
    (new js/createjs.Shape graphics)))

(defn set-position [shape x y]
  (do
    (set! (.-x shape) x)
    (set! (.-y shape) y))
  shape)
