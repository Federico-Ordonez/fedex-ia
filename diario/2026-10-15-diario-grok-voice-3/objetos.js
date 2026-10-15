export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.5, 1.0, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.5, 0.07, 32, 128), M.blue, [-0.5, 1.0, 0], [Math.PI / 2.2, 0, 0.3], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [2.0, 0.55, 0.3], [0, 0.4, 0], g);
  },
  onda({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    const hs = [0.8, 1.6, 2.4, 1.6, 0.8];
    hs.forEach((h, i) => add(new RoundedBoxGeometry(0.7, h, 0.7, 6, 0.14), i === 2 ? M.blue : (i % 2 ? M.white : M.pearl), [-1.8 + i * 0.9, h / 2, 0], [0, 0, 0], g));
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 5; i++) add(disc(), M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    add(disc(), M.blue, [1.15, 0.1, 0.2]);
  },
  llamadas({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new THREE.CylinderGeometry(0.5, 1.1, 1.3, 96), M.blue, [-1.0, 1.3, 0], [0, 0, -Math.PI / 2], g);
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.5, 96), M.graphite, [-1.9, 1.3, 0], [0, 0, Math.PI / 2], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.pearl, [1.6, 0.8, 0.3], [0, 0, 0], g);
  },
};
