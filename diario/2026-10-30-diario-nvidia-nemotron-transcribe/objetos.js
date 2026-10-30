// Objetos 3D del post de Nemotron 3.5 Transcribe.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    const h = [0.7, 1.4, 2.2, 1.6, 2.8, 1.8, 1.2, 0.8];
    h.forEach((v, i) => add(new RoundedBoxGeometry(0.5, v, 0.5, 6, 0.12), i === 4 ? M.blue : M.pearl, [-2.1 + i * 0.6, v / 2, 0], [0, 0, 0], g));
  },
  uno({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new THREE.CylinderGeometry(0.8, 0.8, 1.6, 96), M.pearl, [-1.6, 0.8, 0], [0, 0, 0], g);
    [M.white, M.blue, M.silver].forEach((m, i) => add(new RoundedBoxGeometry(2.2, 0.22, 1.6, 6, 0.08), m, [1.4, 0.11 + i * 0.3, 0], [0, 0, 0], g));
  },
  dos({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.4, 11); look(0, 0.7, 0);
    const g = Group(); g.rotation.y = -0.5;
    add(new RoundedBoxGeometry(3.2, 0.5, 3.2, 6, 0.1), M.graphite, [0, 0.25, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.5, 0.4, 1.5, 6, 0.1), M.blue, [0, 0.7, 0], [0, 0, 0], g);
    for (let i = 0; i < 5; i++) { const p = -1.2 + i * 0.6; add(new RoundedBoxGeometry(0.22, 0.14, 0.5, 4, 0.04), M.silver, [p, 0.2, 1.8], [0, 0, 0], g); add(new RoundedBoxGeometry(0.22, 0.14, 0.5, 4, 0.04), M.silver, [p, 0.2, -1.8], [0, 0, 0], g); }
  },
  tres({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.45;
    [M.pearl, M.white, M.blue, M.pearl].forEach((m, i) => add(new RoundedBoxGeometry(1.6, 0.9 + i * 0.35, 0.18, 6, 0.08), m, [-2.0 + i * 1.35, (0.9 + i * 0.35) / 2, i * 0.3], [0, 0, 0], g));
  },
};
