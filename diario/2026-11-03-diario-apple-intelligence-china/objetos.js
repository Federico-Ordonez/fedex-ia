export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.7, 0.95, 0], [0, 0, 0], g);
    edgeBox(-0.7, 1.15, 0, 2.5, 2.3, 2.5, 0.045, M.blue, g);
    add(new RoundedBoxGeometry(1.15, 1.15, 1.15, 6, 0.14), M.silver, [1.75, 0.575, 0.3], [0, 0.4, 0], g);
  },
  funciones({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.pearl, M.white, M.blue, M.pearl].forEach((m, i) => add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), m, [-1.95 + i * 1.3, 0.5, 0], [0, 0, 0], g));
  },
  calendario({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 3; i++) add(disc(), M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 8; i++) add(disc(), i === 7 ? M.blue : M.silver, [1.15, 0.1 + i * 0.24, 0.2]);
  },
  pais({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(3.6, 0.24, 3.0, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.6, 0.6, 1.5, 96), M.white, [-0.8, 0.99, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.blue, [0.9, 0.74, 0.1], [0, 0.4, 0], g);
  },
};
