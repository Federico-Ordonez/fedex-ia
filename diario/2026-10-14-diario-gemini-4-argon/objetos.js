export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.4, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.CylinderGeometry(0.8, 0.8, 2.2, 96), M.graphite, [-0.5, 1.1, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.75, 96, 64), M.blue, [-0.5, 2.95, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.14), M.pearl, [1.5, 0.5, 0.3], [0, 0.4, 0], g);
    add(new RoundedBoxGeometry(0.7, 0.7, 0.7, 6, 0.1), M.silver, [2.5, 0.35, -0.4], [0, 0.2, 0], g);
  },
  pasos({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    [M.pearl, M.white, M.silver, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(1.1, 0.5 + i * 0.5, 1.4, 6, 0.1), m, [-1.9 + i * 1.25, (0.5 + i * 0.5) / 2, 0], [0, 0, 0], g));
  },
  planes({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    const hs = [0.8, 1.5, 2.2];
    [M.silver, M.white, M.blue].forEach((m, i) => add(new THREE.CylinderGeometry(0.7, 0.7, hs[i], 96), m, [-1.8 + i * 1.8, hs[i] / 2, 0], [0, 0, 0], g));
  },
  rampa({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.45;
    const s = new THREE.Shape(); s.moveTo(-2.2, 0); s.lineTo(2.2, 0); s.lineTo(2.2, 2.0); s.lineTo(-2.2, 0);
    add(new THREE.ExtrudeGeometry(s, { depth: 1.6, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 5 }), M.pearl, [0, 0.06, -0.8], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.blue, [-1.7, 0.56, 0.9], [0, 0, 0], g);
  },
};
