// Objetos 3D del post FLUX 3 Max.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.7, 2.4, 0.18, 6, 0.08), M.pearl, [-0.6, 1.2, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.55, 64, 48), M.blue, [1.2, 0.55, 0.5], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.9, 0.9, 0.9, 6, 0.12), M.silver, [2.4, 0.45, -0.2], [0, 0.4, 0], g);
  },
  cuadros({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    [M.pearl, M.white, M.pearl, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(1.1, 1.5, 0.14, 6, 0.06), m, [-2.0 + i * 1.35, 0.75, i * -0.25], [0, 0, 0], g));
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 4; i++) add(disc(), M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 6; i++) add(disc(), i === 5 ? M.blue : M.silver, [1.15, 0.1 + i * 0.24, 0.2]);
  },
  clips({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.3;
    const s = [0.8, 1.0, 1.4, 1.0, 0.8];
    s.forEach((k, i) => add(new RoundedBoxGeometry(k, k, k, 6, 0.12), i === 2 ? M.blue : M.pearl, [-2.4 + i * 1.2, k / 2, 0], [0, 0.3, 0], g));
  },
};
