export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new THREE.CylinderGeometry(1.6, 1.6, 0.24, 96), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.85, 96, 64), M.graphite, [0, 1.1, 0], [0, 0, 0], g);
    edgeBox(0, 1.3, 0, 3.0, 2.4, 3.0, 0.045, M.blue, g);
  },
  audio({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.8, 96, 64), M.pearl, [0, 1.2, 0], [0, 0, 0], g);
    [1.3, 1.8, 2.3].forEach((r, i) => add(new THREE.TorusGeometry(r, 0.05, 24, 128), i === 1 ? M.blue : M.silver, [0, 1.2, 0], [Math.PI / 2.4, 0, 0], g));
  },
  acceso({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    [0, 1, 2].forEach(i => add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.pearl, [-2.2 + i * 1.3, 0.5, -0.9], [0, 0, 0], g));
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.blue, [1.9, 0.5, 0.8], [0, 0.4, 0], g);
  },
  previa({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.4, 0.24, 3.4, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    edgeBox(0, 1.3, 0, 2.4, 2.2, 2.4, 0.045, M.blue, g);
    add(new THREE.SphereGeometry(0.6, 64, 48), M.white, [-0.4, 0.84, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.7, 0.7, 0.7, 6, 0.1), M.silver, [0.55, 0.59, 0.3], [0, 0.4, 0], g);
  },
};
