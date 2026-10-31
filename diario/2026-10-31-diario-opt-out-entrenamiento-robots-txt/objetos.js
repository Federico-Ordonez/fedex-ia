export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.6, 3.0, 0.22, 6, 0.1), M.pearl, [-0.3, 1.5, -0.4], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 64, 48), M.blue, [0.3, 0.8, 1.0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.silver, [2.1, 0.5, 0.4], [0, 0.4, 0], g);
  },
  unico({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.3;
    [-1.2, 0, 1.2].forEach((z, i) => add(new THREE.SphereGeometry(0.55, 64, 48), M.silver, [-2.2 + i * 0.3, 0.55, z], [0, 0, 0], g));
    add(new THREE.CylinderGeometry(0.7, 0.7, 1.8, 96), M.blue, [1.6, 0.9, 0], [0, 0, 0], g);
  },
  fecha({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.graphite, [-2.0, 0.55, 0], [0, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.8, 1.1, 6, 0.14), M.white, [-0.6, 0.9, 0], [0, 0.3, 0], g);
    add(new THREE.CylinderGeometry(0.95, 0.95, 0.22, 96), M.blue, [1.3, 0.11, 0.2], [0, 0, 0], g);
  },
  bing({ THREE, cam, look, M, add, edgeBox, RoundedBoxGeometry, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 0.24, 3.2, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.85, 96, 64), M.white, [0, 1.09, 0], [0, 0, 0], g);
    edgeBox(0, 1.2, 0, 2.2, 2.2, 2.2, 0.045, M.blue, g);
  },
};
