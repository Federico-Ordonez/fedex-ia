export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.CylinderGeometry(1.5, 1.5, 0.3, 96), M.pearl, [-0.5, 1.2, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(1.1, 1.1, 0.3, 96), M.white, [-0.5, 0.78, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.7, 0.7, 0.3, 96), M.blue, [-0.5, 0.36, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [2.1, 0.55, 0.3], [0, 0.4, 0], g);
  },
  prepara({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.0, 2.6, 0.12, 6, 0.06), M.pearl, [-0.9, 1.3, -0.4], [0, 0.2, 0.08], g);
    add(new RoundedBoxGeometry(2.0, 2.6, 0.12, 6, 0.06), M.white, [0.5, 1.3, 0.2], [0, -0.2, -0.06], g);
    add(new THREE.SphereGeometry(0.7, 64, 48), M.blue, [1.9, 0.7, 0.9], [0, 0, 0], g);
  },
  admin({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(4.0, 0.3, 3.0, 6, 0.1), M.graphite, [0, 0.15, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.7, 0.7, 1.6, 96), M.blue, [-0.7, 1.1, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.1, 0.85, 0.2], [0, 0.4, 0], g);
  },
  revisa({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.pearl, M.white, M.pearl].forEach((m, i) => add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), m, [-2.1 + i * 1.3, 0.55, 0], [0, 0, 0], g));
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.blue, [1.8, 1.1, 0], [0, 0, 0], g);
  },
};
