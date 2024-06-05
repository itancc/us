"use client";
import Scene, { SceneProps } from "@/components/Scene";
import { ArcRotateCamera, MeshBuilder, Vector3 } from "@babylonjs/core";

export default function DemoScene() {
  const onReady: SceneProps["onReady"] = ({ scene, camera }) => {
    scene.removeCamera(camera);
    scene.createDefaultCameraOrLight(true, true, true);
    const _camera = scene.activeCamera as ArcRotateCamera;
    _camera.setPosition(new Vector3(0, 5, -10));
    MeshBuilder.CreateBox("box", { size: 1 }, scene);
  };
  return (
    <div className="col-span-3">
      <Scene className="w-full h-full" onReady={onReady}></Scene>
    </div>
  );
}
