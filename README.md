# Savana Modal
Simple modal to your website

##Use:
```
 $savana(document).done(function(e){

        // Launcher plugin
        var modal = $savana("body").modal();

        // HTML plugin loader
        var modalTeste = modal.modalLoad(".modal-test");
        var modalTeste2 = modal.modalLoad(".modal-test2");

        // Leave the modal opens by default when the page loads
        modal.modalOpen(modalTeste2);
        
    });

```
##Exemple HTML:
```
<!-- // HTML Modal -->
 <!-- The class "sjs-modal-hide, sjs-modal-content and sjs-modal-open is required" -->

  <div class="sjs-modal-hide modal-test">
    <div class="sjs-modal-content">
      Content test 1
    </div>
  </div>

  <div class="sjs-modal-hide modal-test2">
    <div class="sjs-modal-content">
      Content test 2
    </div>
  </div>
  <!-- // HTML Modal -->

  <!-- // Modal open click -->
  <!-- rel is the class of modal html -->
  <p><a href="#" class="sjs-modal-open" rel=".modal-test" title="">Modal test 1</a></p>
  <p><a href="#" class="sjs-modal-open" rel=".modal-test2" title="">Modal test 2</a></p>
  <!-- // Modal open click -->

```

