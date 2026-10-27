// Objetos 3D del post.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(3.0, 2.0, 0.18, 6, 0.08), M.pearl, [-0.4, 1.7, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 48), M.silver, [-0.4, 0.35, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.4, 0.12, 0.9, 6, 0.05), M.silver, [-0.4, 0.06, 0], [0, 0, 0], g);
    add(new THREE.ConeGeometry(0.28, 0.7, 48), M.blue, [0.3, 1.7, 0.3], [0.3, 0, 0.5], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.slate, [2.2, 0.5, 0.4], [0, 0.4, 0], g);
  },
  pantalla({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(2.6, 1.8, 0.16, 6, 0.07), M.pearl, [-0.5, 0.9, -0.5], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.6, 1.8, 0.16, 6, 0.07), M.white, [0.5, 1.2, 0.3], [0, 0, 0], g);
    add(new THREE.ConeGeometry(0.25, 0.65, 48), M.blue, [1.2, 0.9, 0.7], [0.3, 0, 0.5], g);
  },
  planes({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    for (let i = 0; i < 4; i++) add(new RoundedBoxGeometry(0.9, 0.6 + i * 0.35, 0.9, 6, 0.1), M.graphite, [-2.6 + i * 1.1, (0.6 + i * 0.35) / 2, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.9, 2.3, 0.9, 6, 0.1), M.blue, [1.9, 1.15, 0], [0, 0, 0], g);
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 8; i++) add(disc(), M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 4; i++) add(disc(), i === 3 ? M.blue : M.silver, [1.15, 0.1 + i * 0.24, 0.2]);
  },
};
