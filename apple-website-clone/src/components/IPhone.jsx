/*
import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb');

  const texture = useTexture(props,item,img);

  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}>
          <meshStandardMaterial roughness={1} map={texture}/>
        </mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  )
}

export default Model;

useGLTF.preload('/models/scene.glb');
*/


import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model({ item, ...props }) {
  const { nodes, materials } = useGLTF('/models/scene.glb');
  const texture = useTexture(item.img); // Assuming `item.img` is the texture URL.

  // Update material colors based on conditions
  useEffect(() => {
    if (!item || !item.color || !materials) return;

    Object.entries(materials).forEach(([name, material]) => {
      if (
        ![
          "zFdeDaGNRwzccye",
          "ujsvqBWRMnqdwPx",
          "hUlRcbieVuIiOXG",
          "jlzuBkUzuJqgiAK",
          "xNrofRCqOXXHVZt",
        ].includes(name)
      ) {
        material.color = new THREE.Color(item.color[0]);
        material.needsUpdate = true;
      }
    });
  }, [materials, item]);

  // Reusable Mesh Component
  const renderMesh = (nodeKey, materialKey) => (
    <mesh
      key={nodeKey}
      castShadow
      receiveShadow
      geometry={nodes[nodeKey]?.geometry}
      material={materials[materialKey]}
      scale={0.01}
    />
  );

  return (
    <group {...props} dispose={null}>
      {renderMesh('ttmRoLdJipiIOmf', 'hUlRcbieVuIiOXG')}
      {renderMesh('DjsDkGiopeiEJZK', 'PaletteMaterial001')}
      {renderMesh('buRWvyqhBBgcJFo', 'PaletteMaterial002')}
      {renderMesh('MrMmlCAsAxJpYqQ_0', 'dxCVrUCvYhjVxqy')}
      {renderMesh('wqbHSzWaUxBCwxY_0', 'MHFGNLrDQbTNima')}
      {renderMesh('QvGDcbDApaGssma', 'kUhjpatHUvkBwfM')}
      {renderMesh('vFwJFNASGvEHWhs', 'RJoymvEsaIItifI')}
      {renderMesh('evAxFwhaQUwXuua', 'KSIxMqttXxxmOYl')}
      {renderMesh('USxQiqZgxHbRvqB', 'mcPrzcBUcdqUybC')}
      {renderMesh('TvgBVmqNmSrFVfW', 'pIhYLPqiSQOZTjn')}
      {renderMesh('GuYJryuYunhpphO', 'eShKpuMNVJTRrgg')}
      {renderMesh('pvdHknDTGDzVpwc', 'xdyiJLYTYRfJffH')}
      {renderMesh('CfghdUoyzvwzIum', 'jpGaQNgTtEGkTfo')}
      {renderMesh('DjdhycfQYjKMDyn', 'ujsvqBWRMnqdwPx')}
      {renderMesh('usFLmqcyrnltBUr', 'sxNzrmuTqVeaXdg')}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      {renderMesh('vELORlCJixqPHsZ', 'zFdeDaGNRwzccye')}
      {renderMesh('EbQGKrWAqhBHiMv', 'TBLSREBUyLMVtJa')}
      {renderMesh('EddVrWkqZTlvmci', 'xNrofRCqOXXHVZt')}
      {renderMesh('KSWlaxBcnPDpFCs', 'yQQySPTfbEJufve')}
      {renderMesh('TakBsdEjEytCAMK', 'PaletteMaterial003')}
      {renderMesh('IykfmVvLplTsTEW', 'PaletteMaterial004')}
      {renderMesh('wLfSXtbwRlBrwof', 'oZRkkORNzkufnGD')}
      {renderMesh('WJwwVjsahIXbJpU', 'yhcAXNGcJWCqtIS')}
      {renderMesh('YfrJNXgMvGOAfzz', 'bCgzXjHOanGdTFV')}
      {renderMesh('DCLCbjzqejuvsqH', 'vhaEJjZoqGtyLdo')}
      {renderMesh('CdalkzDVnwgdEhS', 'jlzuBkUzuJqgiAK')}
      {renderMesh('NtjcIgolNGgYlCg', 'PpwUTnTFZJXxCoE')}
      {renderMesh('pXBNoLiaMwsDHRF', 'yiDkEwDSyEhavuP')}
      {renderMesh('IkoiNqATMVoZFKD', 'hiVunnLeAHkwGEo')}
      {renderMesh('rqgRAGHOwnuBypi', 'HGhEhpqSBZRnjHC')}
    </group>
  );
}

export default Model;

// Preload the GLTF model
useGLTF.preload('/models/scene.glb');


