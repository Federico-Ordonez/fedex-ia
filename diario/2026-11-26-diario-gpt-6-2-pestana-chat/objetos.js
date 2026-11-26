export default {
  portada({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.CylinderGeometry(2.2, 2.2, 0.16, 96), M.silver, [0, 0.08, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(1.05, 96, 64), M.graphite, [-0.6, 1.21, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.blue, [1.2, 0.66, 0.5], [0, 0, 0], g);
  },
  chat({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.6, 1.3, 0.5, 6, 0.2), M.pearl, [-0.8, 1.9, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.2, 1.1, 0.5, 6, 0.2), M.blue, [0.9, 0.65, 0.5], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.4, 48, 32), M.silver, [-2.4, 0.4, 0.2], [0, 0, 0], g);
  },
  planes({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4; g.position.x = -0.9;
    [0.7, 1.2, 1.7, 2.3].forEach((h, i) => add(new RoundedBoxGeometry(0.95, h, 0.95, 6, 0.1), i === 3 ? M.blue : M.silver, [-0.4 + i * 1.1, h / 2, 0], [0, 0, 0], g));
    add(new RoundedBoxGeometry(0.6, 0.4, 0.6, 6, 0.08), M.graphite, [-1.9, 0.2, 0.3], [0, 0, 0], g);
  },
  fotos({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.6, 0.2, 3.0, 6, 0.08), M.pearl, [0, 0.1, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.7, 64, 48), M.silver, [0, 1.0, 0], [0, 0, 0], g);
    edgeBox(0, 1.1, 0, 2.2, 1.8, 2.2, 0.045, M.blue, g);
  },
};
