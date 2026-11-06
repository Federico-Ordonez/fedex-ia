export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.2, 0.16, 2.0, 6, 0.06), M.pearl, [-0.3, 0.08, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.0, 1.8, 0.14, 6, 0.06), M.graphite, [-0.3, 1.1, -0.7], [-0.12, 0, 0], g);
    add(new THREE.SphereGeometry(0.6, 96, 64), M.blue, [-0.3, 0.76, 0.5], [0, 0, 0], g);
  },
  timeline({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(3.0, 0.5, 0.9, 6, 0.1), M.pearl, [-0.3, 0.25, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.2, 0.5, 0.9, 6, 0.1), M.blue, [0.1, 0.8, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.4, 0.5, 0.9, 6, 0.1), M.white, [-0.5, 1.35, 0], [0, 0, 0], g);
  },
  chip({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.4, 11); look(0, 0.5, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(3.0, 0.3, 3.0, 6, 0.1), M.silver, [0, 0.15, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.3, 0.24, 1.3, 6, 0.08), M.blue, [0, 0.42, 0], [0, 0, 0], g);
    for (let i = 0; i < 4; i++) { add(new RoundedBoxGeometry(0.22, 0.14, 0.5, 4, 0.04), M.graphite, [-1.0 + i * 0.67, 0.07, 1.7], [0, 0, 0], g); }
  },
  conecta({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.7, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.2, 1.2, 1.2, 6, 0.14), M.pearl, [-2.0, 0.6, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 1.2, 1.2, 6, 0.14), M.silver, [2.0, 0.6, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.2, 0.2, 2.8, 48), M.blue, [0, 0.6, 0], [0, 0, Math.PI / 2], g);
  },
};
