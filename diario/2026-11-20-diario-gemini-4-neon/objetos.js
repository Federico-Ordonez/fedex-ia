export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.7, 1.7, 1.7, 6, 0.16), M.pearl, [-0.6, 0.85, 0], [0, 0.3, 0], g);
    add(new THREE.TorusGeometry(1.5, 0.07, 32, 128), M.blue, [-0.6, 1.0, 0], [Math.PI / 2.6, 0.2, 0.4], g);
    add(new THREE.CylinderGeometry(0.6, 0.6, 1.4, 96), M.silver, [1.9, 0.7, 0.3], [0, 0, 0], g);
  },
  escala({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.35;
    [[M.pearl, 1.0], [M.blue, 1.8], [M.pearl, 2.6]].forEach(([m, h], i) => add(new THREE.CylinderGeometry(0.62, 0.62, h, 96), m, [-1.5 + i * 1.5, h / 2, 0], [0, 0, 0], g));
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.2, 0.24, 2.2, 6, 0.1), M.graphite, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.8, 0.8, 0.22, 96), M.blue, [-0.6, 0.35, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.9, 0.9, 0.9, 6, 0.12), M.silver, [0.9, 0.69, 0.1], [0, 0.4, 0], g);
  },
  selector({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.4, 0.24, 3.4, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 96), M.white, [0, 0.94, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.55, 64, 48), M.blue, [0, 2.0, 0], [0, 0, 0], g);
  },
};
