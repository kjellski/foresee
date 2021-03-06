(ns foresee.drawing)
(enable-console-print!)

;; -----------------------------------------------------------------------------
;; canvas
(def canvas-id "canvas")
(def canvas (.getElementById js/document canvas-id))
(def screen-width (.-width canvas))
(def screen-height (.-height canvas))
(def ticker js/createjs.Ticker)

(println (str "screen-resolution: " screen-width "x" screen-height))

(defn add-event-listener [target event-name f]
  (.addEventListener target event-name f))

(defn event-listeners []
  (.addEventListener  "tick" (fn [e](.log js/console e))))
;; (.removeAllEventListeners ticker)
(add-event-listener ticker "tick" (fn [e] (.log js/console e)))
(def stage (let [stage-tmp (new js/createjs.Stage canvas-id)]
             (.enableMouseOver stage-tmp)
             (.-name "MainStage")
             stage-tmp))
(.log js/console stage)

;; -----------------------------------------------------------------------------
;; level

(def walls
  [[           0             0            0 screen-height]   ; left
   [           0             0 screen-width             0]   ; top
   [screen-width screen-height screen-width             0]   ; right
   [screen-width screen-height            0 screen-height]]) ; bottom


;; -----------------------------------------------------------------------------
;; drawing
(def ball-radius 20)
(def line-thickness 1)

(defn draw-on-stage
  "draws given shape on stage"
  [shape]
  (do
    (.addChild stage shape)
    (.update stage)))

(defn line
  "creates a line from (x1, y1) to (x2, y2)"
  [[x1 y1 x2 y2]]
  (let [graphics (new js/createjs.Graphics)]
    (doto
      graphics
      (.setStrokeStyle line-thickness)
      (.beginStroke "black")
      (.moveTo x1 y1)
      (.lineTo x2 y2))
    (new js/createjs.Shape graphics)))

(defn ball
  "creates a ball shape with a cross in it"
  []
  (let [graphics (new js/createjs.Graphics)]
    (doto
      graphics
      (.setStrokeStyle line-thickness)
      (.beginStroke "black")
      ; top to bottom line
      (.moveTo 0 (- ball-radius))
      (.lineTo 0 ball-radius)
      ; left to right line
      (.moveTo (- ball-radius) 0)
      (.lineTo ball-radius 0)
      ; the circle
      (.setStrokeStyle (inc line-thickness))
      (.drawCircle 0 0 ball-radius))
    (new js/createjs.Shape graphics)))

(defn set-position [shape x y]
  (do
    (set! (.-x shape) x)
    (set! (.-y shape) y))
  shape)

(defn draw-shape-at [shape [x y]]
  (draw-on-stage (set-position shape x y)))
