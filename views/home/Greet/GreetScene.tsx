"use client";

import { Effect, PostProcess } from "@babylonjs/core";
import GreetFragShader from "./greet.frag.glsl";
import Scene, { SceneProps } from "@/components/Scene";

export default function GreetScene(props: Omit<SceneProps, "onReady">) {
  const onReady: SceneProps["onReady"] = ({ scene, camera }) => {
    Effect.ShadersStore["starFragmentShader"] = GreetFragShader;
    const postProcess = new PostProcess("star post process", "star", {
      uniforms: ["screenSize", "sceneSampler", "u_time"],
      camera: camera,
    });

    scene.createDefaultEnvironment();
    camera.detachControl();
    postProcess.onApply = (effect) => {
      effect.setFloat2("screenSize", postProcess.width, postProcess.height);
      effect.setFloat("u_time", performance.now() / 1000);
      effect.setTextureFromPostProcess("sceneSampler", postProcess);
    };
  };
  return <Scene onReady={onReady} {...props}></Scene>;
}
