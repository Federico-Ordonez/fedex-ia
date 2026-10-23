// Objetos 3D del post. Cada función recibe ctx = { THREE, RoundedBoxGeometry, scene, cam, look, M, add, cyl, V, rrect, edgeBox, Group }.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(2.2, 2.0, 1.6, 6, 0.16), M.silver, [-0.6, 1.0, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.55, 0.55, 0.18, 96), M.blue, [-0.6, 1.0, 0.86], [Math.PI / 2, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.pearl, [1.9, 0.8, 0.3], [0, 0, 0], g);
  },
  aprueba({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.14), M.pearl, [-1.9, 0.75, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.5, 1.5, 1.5, 6, 0.14), M.white, [1.9, 0.75, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.8, 0.8, 0.8, 6, 0.12), M.blue, [0, 0.4, 0], [0, 0.5, 0], g);
  },
  seis({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.4, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.4;
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
      const blue = r === 1 && c === 2;
      add(new THREE.CylinderGeometry(0.6, 0.6, 1.0, 96), blue ? M.blue : M.graphite, [-1.8 + c * 1.8, 0.5, -0.9 + r * 1.8], [0, 0, 0], g);
    }
  },
  escudo({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 0.24, 3.2, 6, 0.1), M.white, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.85, 96, 64), M.pearl, [0, 1.1, 0], [0, 0, 0], g);
    edgeBox(0, 1.2, 0, 2.2, 2.2, 2.2, 0.045, M.blue, g);
  },
};
