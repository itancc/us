"use client";

import {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Camera,
  Engine,
  FreeCamera,
  Scene as BabylonScene,
  Vector3,
} from "@babylonjs/core";
import { useTheme } from "next-themes";

export interface sceneProps
  extends DetailedHTMLProps<
    CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > {
  onReady?: (props: {
    engine: Engine;
    scene: BabylonScene;
    camera: Camera;
  }) => void;
}
export default function Scene(props: sceneProps) {
  const { onReady, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState<BabylonScene>();
  const { theme, systemTheme } = useTheme();
  useEffect(() => {
    const canvas = canvasRef.current!;
    const engine = new Engine(canvas, true);
    const _scene = new BabylonScene(engine);

    const camera = new FreeCamera("camera", new Vector3(0, 0, -10), _scene);
    camera.attachControl(canvas, true);
    setScene(_scene);
    onReady?.({ engine, scene: _scene, camera });
    engine.runRenderLoop(() => _scene.render());
  }, [onReady]);

  useEffect(() => {
    if (!scene) return;
    const _theme = theme === "system" ? systemTheme : theme;
    if (_theme === "dark") {
      scene.clearColor.set(0, 0, 0, 1);
    } else {
      scene.clearColor.set(1, 1, 1, 1);
    }
  }, [scene, theme, systemTheme]);

  return <canvas ref={canvasRef} {...rest}></canvas>;
}
